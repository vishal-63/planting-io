import React from "react";
import { Link } from "react-router-dom";

const NurseryRegister = () => {
  return (
    <div>
      Login here:{" "}
      <Link to="/nursery/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default NurseryRegister;
