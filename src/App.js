import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import ManageProductsForm from "./Pages/nursery/dashboard/manage-product/ManageProductsForm";
import { UserIconsWrapper } from "./Components/Topbar/TopbarElements";
import Home from "./Pages";
import About from "./Pages/about";
import Account from "./Pages/account";
import Admin from "./Pages/admin";
import Complaints from "./Pages/admin/complaints";
import AdminLogin from "./Pages/admin/login";
import Cart from "./Pages/cart";
import Item from "./Pages/item";
import Nursery from "./Pages/nursery";
import NurseryList from "./Pages/admin/nursery-list";
import ProductList from "./Pages/admin/product-list";
import UserList from "./Pages/admin/user-list";
import ServiceList from "./Pages/admin/service-list";
import NurseryHomePage from "./Pages/nursery";
import AddProduct from "./Pages/nursery/dashboard/add-product";
import AddServices from "./Pages/nursery/dashboard/add-services";
import Dashboard from "./Pages/nursery/dashboard/index.js";
import ManageProducts from "./Pages/nursery/dashboard/manage-product/index";
import ManageServices from "./Pages/nursery/dashboard/manage-services/index";
import OrderList from "./Pages/nursery/dashboard/order-list";
import NurseryLogin from "./Pages/nursery/login";
import NurseryRegister from "./Pages/nursery/register";
import Services from "./Pages/services";
import ShopPlants from "./Pages/shop-plants";
import ShopSeeds from "./Pages/shop-seeds";
import ShopTools from "./Pages/shop-tools";
import AdminOrderList from "./Pages/admin/order-list";
import AdminBooingList from "./Pages/admin/booking-list";
import ManageServiceForm from "./Pages/nursery/dashboard/manage-services/ManageServiceForm";
import NurseryProfile from "./Pages/nursery/dashboard/profile";
import AdminProfile from "./Pages/admin/profile";

function App() {
  const [isAdminLoggedin, setIsAdminLoggedin] = useState(false);
  const loginAdmin = () => setIsAdminLoggedin(true);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />

          <Route path="/shop-plants" element={<ShopPlants />} exact />
          <Route path="/shop-plants/:plantId" element={<Item />} exact />

          <Route path="/shop-seeds" element={<ShopSeeds />} exact />
          <Route path="/shop-seeds/:seedId" element={<Item />} exact />

          <Route path="/shop-tools" element={<ShopTools />} exact />
          <Route path="/shop-tools/:toolId" element={<Item />} exact />

          <Route path="/services" element={<Services />} exact />

          <Route path="/cart" element={<Cart />} exact />

          <Route path="/account" element={<Account />} exact />

          <Route path="/nursery" element={<Nursery />} exact></Route>
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
            path="/nursery/dashboard/manage-services/:id"
            element={<ManageServiceForm />}
            exact
          />
          <Route
            path="/nursery/profile"
            element={<NurseryProfile/>}
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/user-list" element={<UserList />} />
          <Route path="/admin/nursery-list" element={<NurseryList />} />
          <Route path="/admin/product-list" element={<ProductList />} />
          <Route path="/admin/service-list" element={<ServiceList />} />
          <Route path="/admin/orders" element={<AdminOrderList />} />
          <Route path="/admin/bookings" element={<AdminBooingList />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
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
