import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import NurseryHomePage from "./Pages/nursery";
import Dashboard from "./Pages/nursery/dashboard/index.js";
import OrderList from "./Pages/nursery/dashboard/order-list";
import NurseryLogin from "./Pages/nursery/login";
import NurseryRegister from "./Pages/nursery/register";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
