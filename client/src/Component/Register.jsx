import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const navigate = useNavigate();
  const [regEmail, setRegEmail] = useState("Example@gmail.com");
  const [regPassword, setRegPassword] = useState(123);
  const [regName, setRegName] = useState("name");

  const toast = useToast();

  //creating account

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        name: regName,
        email: regEmail,
        password: regPassword,
      });



      
      if (response.status === 201) {
        toast({
          title: "User created successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/");
      } else if (response.status === 200) {
        toast({
          title: "Account has already been created",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        
        // setTimeout(() => {
        //   window.location.reload();
        // }, 5000);
      }
    } catch (err) {
      console.error(err);
    }
    setRegEmail("");
    setRegPassword("");
    setRegName("");
  };
  return (
    <section className="min-h-screen">
      <div>
        <div>
          <div className="flex justify-center mt-16 md:mt-10">
            <form action="#" className="">
            <h1 className="text-2xl font-bold w-full text-center">Create an Account</h1>
              <div>
                {/* <label htmlFor="text">Your name</label> */}
                <input
                  placeholder={regName}
                  type="text"
                  name="text"
                  id="text"
        
                  required
                  onChange={(e) => setRegName(e.target.value)}
                  className="border-2 border-black mt-5 px-8 py-3 rounded-sm text-lg  w-full"
                />
              </div>
              <div>
                {/* <label htmlFor="email">Your email</label> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@gmail.com"
                  required
                  onChange={(e) => setRegEmail(e.target.value)}
                  className="border-2 border-black mt-5 px-8 py-3 rounded-sm text-lg mx-auto w-full"
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
                  onChange={(e) => setRegPassword(e.target.value)}
                  className="border-2 border-black mt-5 px-8 py-3 rounded-sm text-lg mx-auto w-full"
                />
              </div>

              <button
                onClick={(e) => createAccount(e)}
                type="submit"
                className="bg-gray-950 text-white w-full mt-5 py-4 text-xl font-bold rounded-md hover:bg-gray-800 cursor-pointer"
              >
                Create an account
              </button>
              <p className="mt-4 text-lg font-semibold">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-blue-800">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
