import { Outlet } from "react-router-dom";
import Navigation from "./Navbar/Navigation";

const Root = () => {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
