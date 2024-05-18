import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./Component/Layout.jsx";
import Homepost from "./Component/Home.jsx";
import Register from "./Component/Register.jsx";
import Login from "./Component/Login.jsx";
import Account from "./Component/Account.jsx";
import CreatePost from "./Component/CreatePost.jsx";
import UpdatePost from "./Component/UpdatePost.jsx";
import { MyContext, UseContextProvider } from "./Context/MyContext.jsx";

const App = () => {
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
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "create",
          element: <CreatePost />,
        },
        {
          path: "update",
          element: <UpdatePost />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <UseContextProvider>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </UseContextProvider>
    </React.StrictMode>
  );
};

export default App;
