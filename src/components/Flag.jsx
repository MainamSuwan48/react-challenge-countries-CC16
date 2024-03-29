import React from "react";
import { useCountriesContext } from "../context/CountriesContext";

function Flag({
  flagUrl,
  name,
  capital,
  population,
  currency,
  continent,
  latlng,
}) {
  const { setCurrentCountry, getWeatherData, setCurrentLatLong } =
    useCountriesContext();
  const updateCurrentCountry = () => {
    let newCountry = {
      country: name,
      capital: capital.toString(),
      populations: population,
      currency: Object.keys(currency).toString(),
      continent: continent.toString(),
    };
    setCurrentCountry(newCountry);
  };
  return (
    <div className="flag">
      <img
        src={flagUrl}
        onClick={() => {
          updateCurrentCountry();
          getWeatherData(capital);
          setCurrentLatLong(latlng);
        }}
      ></img>
    </div>
  );
}

export default Flag;
