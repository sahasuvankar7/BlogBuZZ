import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./Component/Layout.jsx";
import Homepost from "./Component/Home.jsx";
import Register from "./Component/Register.jsx";
import Login from "./Component/Login.jsx";
import { MyContext } from "./Context/MyContext.js";

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState({
      name:"",
      email:"",
    });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Homepost />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <MyContext.Provider value={{loggedInUser,setLoggedInUser}}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </MyContext.Provider>
    </React.StrictMode>
  );
};

export default App;
