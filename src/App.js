import { useContext, useEffect, useState } from "react";
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
import { AuthProvider } from "./AuthContext";
import { CookiesProvider, Cookies } from "react-cookie";
import Test from "./Pages/test";
import OrderSuccess from "./Pages/order-success";
import OrderPage from "./Pages/nursery/dashboard/order-page";
import NurseryPage from "./Pages/admin/nursery-page";
import AdminOrderPage from "./Pages/admin/order-page";
import PaymentsList from "./Pages/admin/payments";
import ForgotPassword from "./Pages/forgot-password";
import Reports from "./Pages/admin/reports";

function App() {
  const [isAdminLoggedin, setIsAdminLoggedin] = useState(
    new Cookies().get("adminId") !== undefined ? true : false
  );
  const loginAdmin = () => setIsAdminLoggedin(true);

  const [isNurseryLoggedIn, setIsNurseryLoggedin] = useState(
    new Cookies().get("nurserId") !== undefined ? true : false
  );
  const loginNursery = () => setIsNurseryLoggedin(true);

  return (
    <AuthProvider>
      <CookiesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/test" element={<Test />} exact />

            <Route path="/about" element={<About />} exact />

            <Route path="/shop-plants" element={<ShopPlants />} exact />
            <Route
              path="/shop-plants/:plantId"
              element={<Item key={document.location.href} />}
              exact
            />

            <Route path="/shop-seeds" element={<ShopSeeds />} exact />
            <Route path="/shop-seeds/:seedId" element={<Item />} exact />

            <Route path="/shop-tools" element={<ShopTools />} exact />
            <Route path="/shop-tools/:toolId" element={<Item />} exact />

            <Route path="/services" element={<Services />} exact />

            <Route path="/cart" element={<Cart />} exact />

            <Route path="/account" element={<Account />} exact />
            <Route path="/order/success" element={<OrderSuccess />} />
            <Route path="/forgot-password" element={<ForgotPassword />} exact />

            <Route path="/nursery" element={<Nursery />} exact></Route>
            <Route
              path="/nursery/login"
              element={<NurseryLogin loginNursery={loginNursery} />}
              exact
            />
            <Route
              path="/nursery/register"
              element={<NurseryRegister />}
              exact
            />
            <Route
              path="/nursery/dashboard"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <Dashboard />
                </RequireNurseryAuth>
              }
              exact
            />
            <Route
              path="/nursery/dashboard/order-list"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <OrderList />
                </RequireNurseryAuth>
              }
              exact
            />
            <Route
              path="/nursery/dashboard/order/:id"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <OrderPage />
                </RequireNurseryAuth>
              }
              exact
            />
            <Route
              path="/nursery/dashboard/add-products"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <AddProduct />
                </RequireNurseryAuth>
              }
              exact
            />
            <Route
              path="/nursery/dashboard/add-services"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <AddServices />
                </RequireNurseryAuth>
              }
              exact
            />
            <Route
              path="/nursery/dashboard/manage-products"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <ManageProducts />
                </RequireNurseryAuth>
              }
              exact
            />
            <Route
              path="/nursery/dashboard/manage-products/:id"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <ManageProductsForm />
                </RequireNurseryAuth>
              }
              exact
            />
            <Route
              path="/nursery/dashboard/manage-services"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <ManageServices />
                </RequireNurseryAuth>
              }
              exact
            />
            <Route
              path="/nursery/dashboard/manage-services/:id"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <ManageServiceForm />
                </RequireNurseryAuth>
              }
              exact
            />
            <Route
              path="/nursery/profile"
              element={
                <RequireNurseryAuth navigateTo="/nursery/login">
                  <NurseryProfile />
                </RequireNurseryAuth>
              }
              exact
            />

            <Route
              path="/admin"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <Admin />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/login"
              element={<AdminLogin loginAdmin={loginAdmin} />}
            />
            <Route
              path="/admin/complaints"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <Complaints />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/payments"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <PaymentsList />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/user-list"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <UserList />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/nursery-list"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <NurseryList />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/nursery/:id"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <NurseryPage />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/product-list"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <ProductList />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/service-list"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <ServiceList />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <AdminOrderList />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/order/:id"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <AdminOrderPage />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/profile"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <AdminProfile />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/admin/reports"
              element={
                <RequireAdminAuth navigateTo="/admin/login">
                  <Reports />
                </RequireAdminAuth>
              }
            />
          </Routes>
        </Router>
      </CookiesProvider>
    </AuthProvider>
  );

  function RequireAdminAuth({ children, navigateTo }) {
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

  function RequireNurseryAuth({ children, navigateTo }) {
    let location = useLocation();
    if (!isNurseryLoggedIn)
      return (
        <Navigate
          to={navigateTo}
          loginNursery={loginNursery}
          state={{ from: location }}
          replace
        />
      );

    return children;
  }
}

export default App;
