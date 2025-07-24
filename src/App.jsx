import React, { useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import HourlyForecast from "./components/Forecast/HourlyForecast/HourlyForecast";
import DailyForecast from "./components/Forecast/DailyForecast/DailyForecast";
import Search from "./components/Search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [background, setBackground] = useState("bg-default");

  const getBackground = (icon) => {
    const code = icon.slice(0,2);
    const time = icon.slice(2);

    const isNight = time === "n";

    switch (code) {
      case '01': 
        return isNight ? 'bg-night-clear' : 'bg-day-clear';
      case '02':
      case '03':
      case '04': 
        return isNight ? 'bg-night-cloudy' : 'bg-day-cloudy';
      case '09': 
      case '10':
        return isNight ? 'bg-night-rain' : 'bg-day-rain';
      case '11':
        return isNight ? 'bg-night-thunderstorm' : 'bg-day-thunderstorm';
      case '13':
        return isNight ? 'bg-night-snow' : 'bg-day-snow';
      case '50':
        return isNight ? 'bg-night-mist' : 'bg-day-mist';
      default:
        return 'bg-default';
    }
  }
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

        const backgroundClass = getBackground(weatherResponse.weather[0].icon);
        setBackground(backgroundClass);
      })
      .catch((err) => console.error(err));
  };

  console.log("Current Weather Data:", currentWeather);
  console.log("Forecast Data:", forecast);

  return (
    <>
      <div className={`app-background ${background}`}></div>
      <div className="main-container">
        <h1 className="title">Weather App</h1>
        <Search onSearchChange={handleSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <HourlyForecast data={forecast} />}
        {forecast && <DailyForecast data={forecast} />}
      </div>
    </>
  );
}

export default App;
