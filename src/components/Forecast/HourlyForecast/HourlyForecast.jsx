import React from "react";
import "./HourlyForecast.css";

const Forecast = ({ data }) => {
  return (
    <div className="forecast-card">
      <h2 className="forecast-title">Hourly Forecast</h2>
      <div className="hourly-items-container">
        {data.list.slice(0, 7).map((hour, idx) => (
          <div className="hourly-item" key={idx}>
            <label className="hour">{hour.dt_txt.slice(11, 16)}</label>
            <img
              src={`/assets/icons/${hour.weather[0].icon}.png`}
              className="hourly-icon"
              alt="weather icon"
            />
            <label className="temp">{Math.round(hour.main.temp)}°C</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
