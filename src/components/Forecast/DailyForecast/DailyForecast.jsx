import React from "react";
import "./DailyForecast.css"

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const DailyForecast = ({ data }) => {
    const today = new Date().getDay();
    const forecastDays = DAYS.slice(today, DAYS.length).concat(DAYS.slice(0, today));

    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("00:00:00"));

    return (
        <div className="daily-forecast-card">
            <h2 className="daily-forecast-title">Daily Forecast</h2>
            {dailyForecasts.map((item, idx) => (
                <details className="daily-item-container" key={idx}>
                    <summary className="daily-item-summary">
                        <div className="daily-item">
                            <img src={`/assets/icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                            <label className="day">{forecastDays[idx]}</label>
                            <label className="description">{item.weather[0].description}</label>
                            <label className="temp-range">High: {Math.round(item.main.temp_max)}°C | Low: {Math.round(item.main.temp_min)}°C</label>
                        </div>
                    </summary>
                    <div className="daily-details-grid">
                        <div className="grid-item"><label>Pressure:</label><label>{item.main.pressure} hPa</label></div>
                        <div className="grid-item"><label>Humidity:</label><label>{item.main.humidity}%</label></div>
                        <div className="grid-item"><label>Clouds:</label><label>{item.clouds.all}%</label></div>
                        <div className="grid-item"><label>Wind speed:</label><label>{item.wind.speed} m/s</label></div>
                        <div className="grid-item"><label>Sea level:</label><label>{item.main.sea_level}m</label></div>
                        <div className="grid-item"><label>Feels like:</label><label>{Math.round(item.main.feels_like)}°C</label></div>
                    </div>
                </details>
            ))}
        </div>
    )
}

export default DailyForecast;