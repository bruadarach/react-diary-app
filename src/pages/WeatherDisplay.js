import React, { useEffect } from 'react';
import './WeatherDisplay.css'
import {dummy} from './dummy';

function WeatherDisplay({setWeather, weather}) {

//     useEffect(() => {
//         fetch("https://api.openweathermap.org/data/2.5/weather?id=1835848&lang=kr&appid=edc606e1cddb031cf69c44e1de3ca86e")
//         .then(data => data.json())
//         .then(data =>   ({
//             'desc': data.weather[0].description,
//             'temp': Math.round(data.main.temp - 273),
//             'temp_min': Math.round(data.main.temp_min - 273),
//             'temp_max':  Math.round(data.main.temp_max - 273),
//             'humidity': data.main.humidity,
//             'wind': data.wind.speed
        
//         // })).then(obj => console.log(obj))
//     })).then(obj => setWeather(obj))
//     }, []);
//     return <div>{weather}</div>
// // .then((obj) => {return <div>{weather}</div>})


    useEffect(() => {
        setWeather ({
                'desc': dummy.weather[0].description,
                'temp': Math.round(dummy.main.temp - 273),
                'temp_min': Math.round(dummy.main.temp_min - 273),
                'temp_max':  Math.round(dummy.main.temp_max - 273),
                'humidity': dummy.main.humidity,
                'wind': dummy.wind.speed
        },[])
    })

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