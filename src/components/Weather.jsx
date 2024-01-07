import React from "react";
import { useCountriesContext } from "../context/CountriesContext";
function Weather() {
  const { weatherData } = useCountriesContext();
  return (
    <div className="weather">
      <h1>Weather</h1>
      <p>Date </p>
      <p>{weatherData.main.temp} C</p>
      <p>{weatherData.weather[0].main}</p>
    </div>
  );
}

export default Weather;
