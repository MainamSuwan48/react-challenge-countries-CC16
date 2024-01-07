import { useContext, useEffect } from "react";
import Search from "./components/Search";
import Main from "./components/Main";
import { useCountriesContext } from "./context/CountriesContext";
function App() {
  const {data,getAllCountriesData} = useCountriesContext();
  useEffect(() => {
    getAllCountriesData();
  }, []);

  return (
    <div className="app">
      <Search />
      <Main />
      <button onClick={() => console.log(data)}>logCountry</button>
    </div>
  );
}

export default App;
