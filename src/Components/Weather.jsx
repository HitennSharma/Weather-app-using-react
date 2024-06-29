import React, { useState, useEffect } from 'react';

export default function Weather(props) {
  const [windDirection, setWindDirection] = useState('');

  useEffect(() => {
    switch (props.weather.windDirection) {
      case 'N':
        setWindDirection('North');
        break;
      case 'E':
        setWindDirection('East');
        break;
      case 'W':
        setWindDirection('West');
        break;
      case 'S':
        setWindDirection('South');
        break;
      default:
        setWindDirection('');
    }
  }, [props.weather.windDirection]);

  return (
    <div className='weather-box'>
      <div className="temperature">Temperature: {props.weather.temperature}°C</div>
      <div className="wind-speed">Wind Speed: {props.weather.windSpeed} kmph</div>
      <div className="humidity">Humidity: {props.weather.humidity}%</div>
      <div className="weather-condition">Weather Condition: {props.weather.weatherCondition}</div>
      <div className="wind-direction">Wind Direction: {windDirection}</div>
      <img src={props.weather.img} alt="Weather Icon" className="weather-icon" />
    </div>
  );
}
