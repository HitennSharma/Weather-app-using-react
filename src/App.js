import React, { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Components/Weather";
import Search from "./Components/Search";
import Home from "./Components/Home";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temperature: 0,
    windSpeed: 140,
    humidity: 60,
    windDirection: 'N',
    img: "",
    weatherCondition: ""
  });

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
          const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          const newWeather = {
            temperature: data.current.temp_c,
            windSpeed: data.current.wind_kph,
            humidity: data.current.humidity,
            windDirection: data.current.wind_dir,
            img: data.current.condition.icon,
            weatherCondition: data.current.condition.text
          };
          setWeather(newWeather);
        } catch (error) {
          console.log(error);
        }
      };
      fetchWeather();
    }
  }, [city]);

  return (
    <>
      <h1 className="heading">Weather App</h1>
      {!city ? <Home setCity={setCity} /> : <>
        <Search setCity={setCity} />
        <Weather weather={weather} />
      </>}
    </>
  );
}
