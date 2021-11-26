import React from "react";
import { Link } from "react-router-dom";

const NurseryLogin = () => {
  return (
    <div>
      Register here:{" "}
      <Link to="/nursery/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default NurseryLogin;
