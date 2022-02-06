import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageProductsForm from "./Components/ManageProductsForm";
import { UserIconsWrapper } from "./Components/Topbar/TopbarElements";
import Home from "./Pages";
import Admin from "./Pages/admin";
import NurseryList from "./Pages/admin/nursery-list";
import ProductList from "./Pages/admin/product-list";
import UserList from "./Pages/admin/user-list";
import ServiceList from "./Pages/admin/service-list";
import NurseryHomePage from "./Pages/nursery";
import AddProduct from "./Pages/nursery/dashboard/add-product";
import AddServices from "./Pages/nursery/dashboard/add-services";
import Dashboard from "./Pages/nursery/dashboard/index.js";
import ManageProducts from "./Pages/nursery/dashboard/manage-product/index";
import ManageServices from "./Pages/nursery/dashboard/manage-services";
import OrderList from "./Pages/nursery/dashboard/order-list";
import NurseryLogin from "./Pages/nursery/login";
import NurseryRegister from "./Pages/nursery/register";
import AdminOrderList from "./Pages/admin/order-list";
import AdminBooingList from "./Pages/admin/booking-list";

function App() {
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/user-list" element={<UserList />} />
          <Route path="/admin/nursery-list" element={<NurseryList />} />
          <Route path="/admin/product-list" element={<ProductList />} />
          <Route path="/admin/service-list" element={<ServiceList />} />
          <Route path="/admin/orders" element={<AdminOrderList />} />
          <Route path="/admin/bookings" element={<AdminBooingList/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
