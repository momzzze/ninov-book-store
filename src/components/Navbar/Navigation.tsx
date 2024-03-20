import { Link } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state";
import CategoryNav from "./CategoryNav";

function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSearchButton = (e) => {
    console.log(e);
  };
  const handleMenuButton = () => {
    console.log(showSidebar);

    setShowSidebar(!showSidebar);
  };
  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <>
      <nav className="container navigation">
        <div className="left_nav_side">
          <Link className="nav-btn btn-logo" to="/">
            <img src="/public/logo-icon.png" alt="logo" />
            NinovStore
          </Link>
          <button className="btn-menu" onClick={handleMenuButton}>
            <img
              src="/src/assets/menu_FILL0_wght400_GRAD0_opsz48.svg"
              alt="menu"
            />
          </button>
        </div>

        <div className="nav_right">
          <div className="navigation-search-container">
            <i className={`fa fa-search`}></i>
            <input
              className="search-field"
              type="text"
              placeholder="Search"
              onChange={(e) => handleSearchButton(e.target.value)}
            />
          </div>
          <button className="btn-profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="btn-profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </button>

          {!user ? (
            <>
              <Link className="nav-btn" to="/login">
                LOGIN
              </Link>
              <Link className="nav-btn" to="/register">
                REGISTER
              </Link>
            </>
          ) : (
            <button className="nav-btn" onClick={handleLogout}>
              LOGOUT
            </button>
          )}
        </div>
      </nav>
      <CategoryNav
        handleMenuButton={handleMenuButton}
        showSidebar={showSidebar}
      />
    </>
  );
}

export default Navigation;
