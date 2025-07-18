import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  const getLocalTime = (timestamp, timezone) => {
    const data = new Date((timestamp + timezone) * 1000);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    };
    return data.toLocaleDateString("en-US", options);
  };

  const localTime = getLocalTime(data.dt, data.timezone);
  const [date, time] = localTime.split(" at ");

  return (
    <div className="weather-card">
      <div className="header">
        <div>
          <p className="city">{data.city}</p>
          <p className="date">{`${date} | ${time}`}</p>
        </div>
      </div>
      <div className="main-section">
        <img
          alt="weather"
          className="weather-icon"
          src={`/assets/icons/${data.weather[0].icon}.png`}
        />
        <div className="temperature-details">
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <p className="weather-description">{data.weather[0].description}</p>
          <p className="temp-range">
            High: {Math.round(data.main.temp_max)}°C | Low: {Math.round(data.main.temp_min)}°C
          </p>
        </div>
      </div>
      <div className="details-section">
        <div className="detail-item">
          <span className="label">Feels Like</span>
          <span className="value">{Math.round(data.main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="label">Humidity</span>
          <span className="value">{data.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind</span>
          <span className="value">{data.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="label">Pressure</span>
          <span className="value">{data.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
