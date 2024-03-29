import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import LastAdded from "../pages/LastAdded";
import BestSellers from "../pages/BestSellers";
import Categories from "../pages/Categories/Categories";
import UploadBook from "../pages/Admin/UploadBook";
import Dashboard from "../pages/Admin/Dashboard";
import DashboardLayout from "../pages/Admin/DashboardLayout";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import ManageBooks from "../pages/Admin/ManageBooks";
import AddGenre from "../pages/Admin/AddGenre";
import AddAuthor from "../pages/Admin/AddAuthor";
import AddShipper from "../pages/Admin/AddShipper";
import AddPublisher from "../pages/Admin/AddPublisher";
import EditBook from "../pages/Admin/EditBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/best-sellers",
        element: <BestSellers />,
      },
      {
        path: "/last-added",
        element: <LastAdded />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin-dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin-dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin-dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin-dashboard/add-genre",
        element: <AddGenre />,
      },
      {
        path: "/admin-dashboard/add-shipper",
        element: <AddShipper />,
      },
      {
        path: "/admin-dashboard/add-author",
        element: <AddAuthor />,
      },
      {
        path: "/admin-dashboard/add-publisher",
        element: <AddPublisher />,
      },
      {
        path: "/admin-dashboard/edit-books/:id",
        element: <EditBook />,
      },
    ],
  },
]);
export default router;
