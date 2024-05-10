import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { MyContext } from "../Context/MyContext";
import Cookies from "universal-cookie";

const Login = () => {
  const cookies = new Cookies();
  const expiryTime = 2 * 60 * 1000;
  const expiryTimeStamp = new Date().getTime() + expiryTime;
  const { setUser } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  // login into my existing account

  const loginAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/api/login`,
        { email, password },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
          credentials:true,
        }
      );
      console.log(response.data);

      // getting the token part from backend
    

      const loggedInUserData = {
        name: response.data.name,
        email: response.data.User_Email,
        message: response.data.message,
        
      };
      // setting the name and email after logged in

      setUser(loggedInUserData);


      if (response.status === 200) {
        // document.cookie = `token=${token}; path=/`;
        // setRedirect(true);
      
        // storing the token to local storage
        localStorage.setItem("jwtToken", response.data.token);
        setTimeout(() => {
          localStorage.removeItem("jwtToken");
          window.location.reload();
        }, 1 * 60 * 1000);

        toast({
          title: "Login Successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/");
      } else {
        toast({
          title: "wrong use credentials",
          description: "Please Enter correct credentials",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please Enter correct password",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
      console.log(err);
    }
  };

  return (
    <section className="min-h-screen">
    <div>
      <div>
        <div className="flex justify-center mt-28 md:mt-20">
          <form className="">
          <h1 className="text-2xl font-bold w-full text-center">Sign in to your account</h1>
            <div>
              {/* <label htmlFor="email">Your email</label> */}
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-black mt-5 px-8 py-3 rounded-sm text-lg  w-full"
              />
            </div>
            <div>
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-black mt-5 px-8 py-3 rounded-sm text-lg mx-auto w-full"
              />
            </div>
            <button type="submit" onClick={(e) => loginAccount(e)}
            className="bg-gray-950 text-white w-full mt-5 py-4 text-xl font-bold rounded-md hover:bg-gray-900 cursor-pointer"
            >Sign in</button>
            <p className="mt-4 text-lg font-semibold">
              Don’t have an account yet?{" "}
              <Link to="/register" className="font-bold text-blue-800">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Login;
