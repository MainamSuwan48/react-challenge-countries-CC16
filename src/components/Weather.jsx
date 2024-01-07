import React from "react";
import { useCountriesContext } from "../context/CountriesContext";
function Weather() {
  const { weatherData } = useCountriesContext();
  const date = `${new Date()}`.split(" ").splice(1,3).join(" ");
  return (
    <div className="weather">
      {weatherData ? (
        <>
          <h1>Weather</h1>
          <p> {date} </p>
          <p>{weatherData.main.temp} C</p>
          <p>{weatherData.weather[0].main}</p>
        </>
      ) : null}
    </div>
  );
}

export default Weather;
