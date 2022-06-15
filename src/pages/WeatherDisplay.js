import React, { useEffect } from 'react';
import './WeatherDisplay.css'
import {dummy} from './dummy';

const WeatherDisplay = ({ setWeather, weather }) => {
    useEffect(() => {
      setWeather({
        desc: dummy.weather[0].description,
        humidity: dummy.main.humidity,
        temp: Math.round(dummy.main.temp - 273),
        temp_min: Math.round(dummy.main.temp_min - 273),
        temp_max: Math.round(dummy.main.temp_max - 273),
        wind: dummy.wind.speed,
      });
    }, []);

    return (
    <div id="weatherdisplay">
        <div id="weather-section-one">
            <div className="weather-info-one">
                <div className="weather-emoji">emoji</div>
                <div className="weather-desc-temp">
                    <div className="weather-desc">{weather.desc}</div>
                    <div className="weather-temp">{weather.temp}</div>
                </div>
            </div>
            <div className="weather-info-two">
                <div className="weather-max-temp">{weather.temp_max}</div>
                <div className="weather-min-temp">{weather.temp_min}</div>
            </div>
        </div>
        <div id="weather-section-two">
            <div className="weather-info-three">
                <div className="weather-wind">{weather.wind}</div>
                <div className="weather-hum">{weather.humidity}</div>
            </div>
        </div>
    </div>
    )
}

export default WeatherDisplay;