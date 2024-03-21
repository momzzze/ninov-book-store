import {
  Outlet,
} from "react-router-dom";

import Navigation from "./components/Navbar/Navigation";

function App() {

  return (
    <div className="app">
      <Navigation/>
      <Outlet/>
    </div>
  );
}

export default App;
