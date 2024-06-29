import React, { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Components/Weather";
import Search from "./Components/Search";

export default function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState({
    temperature : 0,
    windSpeed : 140,
    humidity : 60,
    windDirection : 'N',
    Img : "",
    weatherCondition:""
  });
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0949ee5ea2794a5c941162849240606&q=${city}&aqi=no`);
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
  }, [city]);
  return (
    <>
      <h1 className="Heading">Weather app</h1>
      <Search setCity={setCity}/>
      <Weather weather = {weather}/>
    </>
  );
}
