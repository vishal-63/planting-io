import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
