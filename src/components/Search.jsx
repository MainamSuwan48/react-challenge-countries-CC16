import { useState } from "react";
import { useCountriesContext } from "../context/CountriesContext";

function Search() {
  const { data,setCurrentData } = useCountriesContext();
  const [searchQuery, setSearchQuery] = useState("");
  function searchCountries(){
    const filteredData = data.filter((country) => {
      return country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setCurrentData(filteredData);
  }
  return (
    <div className="search">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          console.log(searchQuery);
        }}
      ></input>
      <button
      onClick={()=>searchCountries()}>Search</button>
    </div>
  );
}

export default Search;
