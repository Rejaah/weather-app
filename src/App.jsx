import React, { useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import HourlyForecast from "./components/Forecast/HourlyForecast/HourlyForecast";
import Search from "./components/Search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeather = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecast = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeather, forecast])
      .then(async ([currentWeather, forecast]) => {
        const weatherResponse = await currentWeather.json();
        const forecastResponse = await forecast.json();

        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setForecast({city: searchData.label, ...forecastResponse});
      })
      .catch((err) => console.error(err));
  };

  console.log("Current Weather Data:", currentWeather);
  console.log("Forecast Data:", forecast);

  return (
    <>
      <div className="app-background bg-day-clear"></div>
      <div className="main-container">
        <h1 className="title">Weather App</h1>
        <Search onSearchChange={handleSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <HourlyForecast data={forecast} />}
      </div>
    </>
  );
}

export default App;
