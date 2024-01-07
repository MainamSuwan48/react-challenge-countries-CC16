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
    <p className="bigtext">{data?"data is here":"data is not here"}</p>
      <Search />
      <Main />
      <button onClick={() => {console.log(data);
        console.log(data[0].name.common)}}>logCountry</button>
    </div>
  );
}

export default App;
