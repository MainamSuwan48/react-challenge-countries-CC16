import React from "react";
import CountryInfo from "./CountryInfo";
import Weather from "./Weather";
import Map from "./Map";

function Info() {
  return (
    <div className="info">
      <div className="info__top">
        <CountryInfo/>
        <Weather/>
      </div>
      <div className="info__bottom">
        <Map/>
      </div>
    </div>
  );
}

export default Info;
