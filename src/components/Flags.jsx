import React from "react";
import Flag from "./Flag";
import { useCountriesContext } from "../context/CountriesContext";

function Flags() {
  const { data } = useCountriesContext();
  return (
    <div className="flags">
      {data
        ? data.map((flag, index) => (
            <Flag
              key={index}
              id={index}
              flagUrl={flag.flags.png}
              name={flag.name.common}
              capital={flag.capital}
              population={flag.population}
              currency={flag.currencies}
              continent={flag.continents}
            />
          ))
        : null}
    </div>
  );
}

export default Flags;
