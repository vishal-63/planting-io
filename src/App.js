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
import Complaints from "./Pages/admin/complaints";
import AdminLogin from "./Pages/admin/login";
import Cart from "./Pages/cart";
import Item from "./Pages/item";
import NurseryHomePage from "./Pages/nursery";
import AddProduct from "./Pages/nursery/dashboard/add-product";
import AddServices from "./Pages/nursery/dashboard/add-services";
import Dashboard from "./Pages/nursery/dashboard/index.js";
import ManageProducts from "./Pages/nursery/dashboard/manage-product/index";
import ManageServices from "./Pages/nursery/dashboard/manage-services";
import OrderList from "./Pages/nursery/dashboard/order-list";
import NurseryLogin from "./Pages/nursery/login";
import NurseryRegister from "./Pages/nursery/register";
import Services from "./Pages/services";
import ShopPlants from "./Pages/shop-plants";
import ShopSeeds from "./Pages/shop-seeds";
import ShopTools from "./Pages/shop-tools";

function App() {
  const [isAdminLoggedin, setIsAdminLoggedin] = useState(false);
  const loginAdmin = () => setIsAdminLoggedin(true);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/shop-plants" element={<ShopPlants />} exact />
          <Route path="/shop-plants/:plantId" element={<Item />} exact />

          <Route path="/shop-seeds" element={<ShopSeeds />} exact />
          <Route path="/shop-seeds/:seedId" element={<Item />} exact />

          <Route path="/shop-tools" element={<ShopTools />} exact />
          <Route path="/shop-tools/:toolId" element={<Item />} exact />

          <Route path="/services" element={<Services />} exact />

          <Route path="/cart" element={<Cart />} exact />

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
          <Route path="/admin/complaints" element={<Complaints />} />
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
