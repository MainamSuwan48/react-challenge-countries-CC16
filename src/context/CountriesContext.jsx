import { createContext, useState, useContext } from "react";
const CountriesContext = createContext();

export default function CountriesContextProvider({ children }) {
    const [data, setData] = useState({});
    const getAllCountriesData = () => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
      .catch((err) => console.log("Error: " + err));
    };
  return (
    <CountriesContext.Provider value={{data,setData,getAllCountriesData}}>{children}</CountriesContext.Provider>
  );
}

//custom hooks 
export const useCountriesContext =()=> useContext(CountriesContext);
