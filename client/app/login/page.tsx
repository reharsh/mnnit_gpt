"use client";
// import { userState } from "@/atoms/states";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { WavyBackground } from "../../components/ui/wavy-background";

// Define your SignupPage component here
const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  async function loginUser() {
    const { email, password } = userDetails;
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password: password,
      }),
    });
    const result = await res.json();
    if (result.status) {
      alert("Error: " + result.message);
    } else {
      alert("you're logged in successfully");
      console.log("logged in successfully");
    }
  }

  const handleInputChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  return (
    <WavyBackground>
      <div className="flex justify-center  items-center h-screen w-screen overflow-hidden p-5">
        <div className="h-[400px] sm:w-[450px] rounded-lg bg-black flex flex-col items-center justify-between p-8 border border-blue-400 hover:shadow-lg">
          <div className="text-white text-3xl">Welcome Back!!</div>
          <div className="flex flex-col  rounded-md w-full">
            <form>
              <input
                type="text"
                id="email"
                placeholder="College Email"
                autoComplete="off"
                className="h-11 border p-2 my-2 border-gray-600 text-white bg-black rounded-md outline-none w-full"
                onChange={handleInputChange}
              />
              <input
                type="password"
                id="password"
                autoComplete="off"
                placeholder="Password"
                className="h-11 border p-2 my-2 border-gray-600 text-white bg-black rounded-md outline-none w-full"
                onChange={handleInputChange}
              />
              <div className="my-5 h-[1px] w-full bg-gray-600"></div>
              <button
                onClick={loginUser}
                type="submit" // Change type to button to prevent form submission
                className="h-11 mt-2 flex justify-center items-center text-black border rounded-md bg-white w-full"
              >
                Log In
              </button>
            </form>
            <div className=""></div>
            <Link
              href="/"
              className=" p-2 my-1 text-white flex justify-center items-center"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default LoginPage;
