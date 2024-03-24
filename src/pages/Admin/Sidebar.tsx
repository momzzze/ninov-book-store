import {
  FaTh,
  FaBars,
  FaBookMedical,
  FaEdit,
  FaBackspace,
} from "react-icons/fa";
import { MdOutlineManageHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";
import logo from '../../assets/logo-icon.png';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Dashboard", icon: <FaTh />, path: "/admin-dashboard" },
    {
      name: "Add Book",
      icon: <FaBookMedical />,
      path: "/admin-dashboard/upload",
    },
    {
      name: "Manage",
      icon: <MdOutlineManageHistory />,
      path: "/admin-dashboard/manage",
    },
    {
      name: "Edit Book",
      icon: <FaEdit />,
      path: "/admin-dashboard/edit-books/:id",
    },
    { name: "Back", icon: <FaBackspace />, path: "/" },
  ];
  return (
    <div className="admin__container">
      <div
        style={{ width: isOpen ? "300px" : "50px" }}
        className="admin__sidebar"
      >
        <div className="top_section">
          <img src={logo} style={{ display: isOpen ? "block" : "none" }} className="logo"/>         
         
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              "link " + (isActive ? "admin_active" : "")
            }
          >
            <div  className="admin_icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
