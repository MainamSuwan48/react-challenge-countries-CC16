import { useState } from "react";
import Search from "./components/Search";
import Main from "./components/Main";
function App() {
  const [data, setData] = useState({});

  return (
    <div className="app">
      <Search/>
      <Main/>
    </div>
  );
}

export default App;
