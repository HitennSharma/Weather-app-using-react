import React, { useState } from 'react';

export default function Home({ setCity }) {
  const [inputCity, setInputCity] = useState("");

  const handleSearch = () => {
    setCity(inputCity);
  };

  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to the Weather App</h1>
      <p className="home-subheading">Get real-time weather updates for any city!</p>
      <p className="home-guide">To get started, enter the name of a city in the search bar below.</p>
      <input 
        type="text" 
        className="home-search-bar" 
        placeholder="Enter city name to start" 
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
      <div className="home-steps">
        <div className="step">
          <h2>Step 1</h2>
          <p>Enter a city name in the search bar.</p>
        </div>
        <div className="step">
          <h2>Step 2</h2>
          <p>Click the "Search" button to view real-time weather information.</p>
        </div>
        <div className="step">
          <h2>Step 3</h2>
          <p>Change the city name to get weather updates for another location.</p>
        </div>
      </div>
    </div>
  );
}
