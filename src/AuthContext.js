import React, { useState, createContext, useEffect } from "react";
import { Cookies } from "react-cookie";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    new Cookies().get("userId") !== undefined
      ? setIsUserAuthenticated(true)
      : setIsUserAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider
      value={[
        isUserAuthenticated,
        setIsUserAuthenticated,
        isAdminAuthenticated,
        setIsAdminAuthenticated,
      ]}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
