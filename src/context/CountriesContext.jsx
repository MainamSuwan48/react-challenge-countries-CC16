import { createContext, useState, useContext } from "react";
const CountriesContext = createContext();

export default function CountriesContextProvider({ children }) {
  const [data, setData] = useState();
  const [currentData, setCurrentData] = useState();
  const [currentCountry, setCurrentCountry] = useState({
    country: "Thailand",
    capital: "Bangkok",
    populations: "69799978",
    currency: "THB",
    continent: "Asia",
  });
  const [currentLatLong, setCurrentLatLong] = useState([13.76, 100.4]);

  const [weatherData, setWeatherData] = useState();
  const getAllCountriesData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCurrentData(data);
      })
      .then(() => getWeatherData())
      .catch((err) => console.log("Error: " + err));
  };

  const getWeatherData = (city = "bangkok") => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=bf62be47646565c8d9b9644cd00be372&q=${city}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => console.log("Error: " + err));
  };
  return (
    <CountriesContext.Provider
      value={{
        data,
        setData,
        currentData,
        setCurrentData,
        currentCountry,
        setCurrentCountry,
        weatherData,
        setWeatherData,
        currentLatLong,
        setCurrentLatLong,
        getAllCountriesData,
        weatherData,
        setWeatherData,
        getWeatherData,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

//custom hooks
export const useCountriesContext = () => useContext(CountriesContext);
