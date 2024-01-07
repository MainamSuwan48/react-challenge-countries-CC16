import { useContext, useEffect } from "react";
import Search from "./components/Search";
import Main from "./components/Main";
import { useCountriesContext } from "./context/CountriesContext";
function App() {
  const {data,getAllCountriesData} = useCountriesContext();
  useEffect(() => {
    setTimeout(() => {
      getAllCountriesData()
    }, 500);
    ;
  }, []);

  return (
    <div className="app">    
      <Search />
      <Main />
      <button onClick={() => {console.log(data);
        console.log(data[0].name.common)}}>logCountry</button>
    </div>
  );
}

export default App;
