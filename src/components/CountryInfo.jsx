import React from "react";
import { useCountriesContext } from "../context/CountriesContext";
function CountryInfo() {
  const { data, currentCountry } = useCountriesContext();
  return (
    <div className="country-info">
      {data ? (
        <>
          <h1>{currentCountry.country}</h1>
          <div>
            <p> Capital : {currentCountry.capital}</p>
            <p> Populations : {currentCountry.populations}</p>
            <p> Currency : {currentCountry.currency}</p>
            <p> Continent :{currentCountry.continent}</p>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CountryInfo;
