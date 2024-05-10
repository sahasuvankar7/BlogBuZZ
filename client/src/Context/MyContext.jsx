import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext("");

export function UseContextProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.log("token not found in localstorage");
        return;
      }

      const res = await axios.get(
        `http://localhost:8080/api/profile?token=${token}`,
        {
          credentials: "include",
        }
      );
    
      setUser(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
}
