import { useContext, useEffect } from "react";
import Search from "./components/Search";
import Main from "./components/Main";
import { useCountriesContext } from "./context/CountriesContext";
function App() {
  const {getAllCountriesData } = useCountriesContext();
  useEffect(() => {
    setTimeout(() => {
      getAllCountriesData();
    }, 500);
  }, []);

  return (
    <div className="app">
      <Search />
      <Main />
    </div>
  );
}

export default App;
