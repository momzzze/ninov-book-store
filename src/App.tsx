import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Admin/Dashboard";
import Categories from "./pages/Categories/Categories";
import BestSellers from "./pages/BestSellers";
import LastAdded from "./pages/LastAdded";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/last-added" element={<LastAdded />} />
      </Route>
    )
  );
 

  return (
    <div className="app">
      <RouterProvider router={router} />      
    </div>
  )
}

export default App;
