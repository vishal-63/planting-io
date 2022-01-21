import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import ManageProductsForm from "./Components/ManageProductsForm";
import Home from "./Pages";
import Admin from "./Pages/admin";
import AdminLogin from "./Pages/admin/login";
import NurseryHomePage from "./Pages/nursery";
import AddProduct from "./Pages/nursery/dashboard/add-product";
import AddServices from "./Pages/nursery/dashboard/add-services";
import Dashboard from "./Pages/nursery/dashboard/index.js";
import ManageProducts from "./Pages/nursery/dashboard/manage-product/index";
import ManageServices from "./Pages/nursery/dashboard/manage-services";
import OrderList from "./Pages/nursery/dashboard/order-list";
import NurseryLogin from "./Pages/nursery/login";
import NurseryRegister from "./Pages/nursery/register";

function App() {
  const [isAdminLoggedin, setIsAdminLoggedin] = useState(false);
  const loginAdmin = () => setIsAdminLoggedin(true);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/nursery" element={<NurseryHomePage />} exact></Route>
          <Route path="/nursery/login" element={<NurseryLogin />} exact />
          <Route path="/nursery/register" element={<NurseryRegister />} exact />
          <Route path="/nursery/dashboard" element={<Dashboard />} exact />
          <Route
            path="/nursery/dashboard/order-list"
            element={<OrderList />}
            exact
          />
          <Route
            path="/nursery/dashboard/add-products"
            element={<AddProduct />}
            exact
          />
          <Route
            path="/nursery/dashboard/add-services"
            element={<AddServices />}
            exact
          />
          <Route
            path="/nursery/dashboard/manage-products"
            element={<ManageProducts />}
            exact
          />
          <Route
            path="/nursery/dashboard/manage-products/:id"
            element={<ManageProductsForm />}
            exact
          />
          <Route
            path="/nursery/dashboard/manage-services"
            element={<ManageServices />}
            exact
          />
          <Route
            path="/admin"
            element={
              // <RequireAuth navigateTo="/admin/login">
              <Admin />
              // </RequireAuth>
            }
          />
          <Route
            path="/admin/login"
            element={<AdminLogin loginAdmin={loginAdmin} />}
          />
        </Routes>
      </Router>
    </>
  );

  function RequireAuth({ children, navigateTo }) {
    let location = useLocation();
    if (!isAdminLoggedin)
      return (
        <Navigate
          to={navigateTo}
          loginAdmin={loginAdmin}
          state={{ from: location }}
          replace
        />
      );

    return children;
  }
}

export default App;
