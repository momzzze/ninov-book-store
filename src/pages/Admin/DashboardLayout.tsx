import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default DashboardLayout;
