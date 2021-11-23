import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import Topbar from "./Components/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
