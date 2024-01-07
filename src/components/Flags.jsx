import React from "react";
import Flag from "./Flag";
import { useCountriesContext } from "../context/CountriesContext";

function Flags() {
  const { currentData } = useCountriesContext();
  return (
    <div className="flags">
      {currentData
        ? currentData.map((flag, index) => (
            <Flag
              key={index}              
              flagUrl={flag.flags.png}
              name={flag.name.common}
              capital={flag.capital}
              population={flag.population}
              currency={flag.currencies}
              continent={flag.continents}
              latlng={flag.latlng}
            />
          ))
        : null}
    </div>
  );
}

export default Flags;
