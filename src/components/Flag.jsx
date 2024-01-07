import React from "react";
import { useCountriesContext } from "../context/CountriesContext";

function Flag({ flagUrl, id, name, capital, population, currency, continent }) {
  const { setCurrentCountry } = useCountriesContext();
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
      <img src={flagUrl} onClick={() => updateCurrentCountry()}></img>
    </div>
  );
}

export default Flag;
