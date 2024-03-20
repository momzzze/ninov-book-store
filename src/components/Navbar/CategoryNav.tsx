import { NavLink } from "react-router-dom";
import "./CategoryNav.css";
import { useSelector } from "react-redux";
import { AuthState } from "../../state";

interface CategoryNavProps {
  handleMenuButton: () => void;
  showSidebar: boolean;
}

const CategoryNav = ({ handleMenuButton, showSidebar }:CategoryNavProps) => {
    const user = useSelector((state:AuthState) => state.user);
    
  return (
    <>
      <nav className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sidebar-closing-btn">         
          <button className="btn-close" onClick={handleMenuButton}>
            {" "}
            <img
              src="/src/assets/close_FILL0_wght400_GRAD0_opsz48.svg"
              alt="menu"
            />
          </button>
        </div>
        <ul className="margin-categories">
          <li><NavLink  to="/categories">CATEGORIES</NavLink></li>
          <li><NavLink  to="/last-added">LAST ADDED</NavLink></li>
          <li><NavLink  to="/best-sellers">BEST SELLERS</NavLink></li>
          <li><NavLink  to="/about">ABOUT</NavLink></li>
          <li><NavLink  to="/contact">CONTACT</NavLink></li> 
          <li><NavLink  to="/admin-dashboard">ADMIN</NavLink></li>                      
        </ul>
      </nav>

      <div className={`bg-color`}>
        <ul className="container highlightTextIn">
          <li><NavLink  to="/categories">CATEGORIES</NavLink></li>
          <li><NavLink  to="/last-added">LAST ADDED</NavLink></li>
          <li><NavLink  to="/best-sellers">BEST SELLERS</NavLink></li>
          <li><NavLink  to="/about">ABOUT</NavLink></li>
          <li><NavLink  to="/contacts">CONTACT</NavLink></li> 
        {user?.role=== 'admin' &&(<li><NavLink  to="/admin-dashboard">ADMIN</NavLink></li>)}                   
        </ul>
      </div>
    </>
  );
};

export default CategoryNav;
