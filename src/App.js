import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import NurseryLogin from "./Pages/nursery/login";
import NurseryRegister from "./Pages/nursery/register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/nursery/login" element={<NurseryLogin />} exact />
          <Route path="/nursery/register" element={<NurseryRegister />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
