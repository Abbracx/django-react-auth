import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))
      : null
  );

  //  replaced useHistory() react-router-dom v5
  let navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    if (response.status === 200) {
      let data = await response.json();
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Something went wrong...");
    }
  };

  let logout = () => {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authToken");
      navigate("/login");
  }
  const contextData = { user, loginUser, logout };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
