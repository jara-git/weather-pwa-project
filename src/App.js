import React, { useState } from 'react';
import { FetchWeather } from './api/FetchWeather';
import './App.css';


const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = async (e) => {
      if(e.key === 'Enter') {
          const data = await FetchWeather(query);

          setWeather(data);
          setQuery('');
      }
  }

  return (
    <div className="main-container">
        <input 
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}/>
        {weather.main && (
            <div className="city">
                <h2 className="city-name">
                    <span>{weather.name}</span>
                    <sup>{weather.sys.country}</sup>
                    <sub>{weather.coord.lon} {weather.coord.lat}</sub>
                </h2>
                <div className="city-temp">
                  {/* the API has kelvin degrees, to convert to celsius: 
                  	0 K − 273,15 = -273,1 °C*/}
                    {((Math.round(weather.main.temp))-273.1).toFixed(1)}
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    <img 
                      className="city-icon" 
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                      alt={weather.weather[0].description} />
                    <p>{weather.weather[0].description}</p>
                </div>
            </div>
        )}
    </div>
);
}

export default App;
