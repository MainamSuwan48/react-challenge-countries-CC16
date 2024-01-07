import React from "react";
import { useCountriesContext } from "../context/CountriesContext";
function CountryInfo() {
  const { data } = useCountriesContext();
  return (
    <div className="country-info">
      {data ? (
        <>
          <h1>{data[225].name.common}</h1>
          <p>Capital : {data[225].capital}</p>
          <p>Population : {data[225].population}</p>
          <p>Currency : {Object.keys(data[225].currencies)}</p>
          <p>Continent :{data[225].continents}</p>
        </>
      ) : null}
    </div>
  );
}

export default CountryInfo;
