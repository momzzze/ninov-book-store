import { Outlet } from "react-router-dom";
import "./Dashboard.css";

const DashboardLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
