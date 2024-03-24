import {
  FaTh,
  FaBars,
  FaBookMedical,
  FaEdit,
  FaBackspace,
  FaUserSecret,
} from "react-icons/fa";
import { MdOutlineManageHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";
import logo from "../../assets/logo-icon.png";
import { GiDramaMasks } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { name: "Dashboard", icon: <FaTh />, path: "/admin-dashboard" },
    {
      name: "Manage",
      icon: <MdOutlineManageHistory />,
      path: "/admin-dashboard/manage",
    },
    {
      name: "Add Book",
      icon: <FaBookMedical />,
      path: "/admin-dashboard/upload",
    },
    {
      name: "Add Shipper",
      icon: <TbTruckDelivery />,
      path: "/admin-dashboard/add-shipper",
    },
    {
      name: "Add Genre",
      icon: <GiDramaMasks />,
      path: "/admin-dashboard/add-genre",
    },
    {
      name: "Add Author",
      icon: <FaUserSecret />,
      path: "/admin-dashboard/add-author",
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
          {window.innerWidth > 400 ? (
            <img
              src={logo}
              style={{ display: isOpen ? "block" : "none" }}
              className="logo"
            />
          ) : null}

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
            <div className="admin_icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
