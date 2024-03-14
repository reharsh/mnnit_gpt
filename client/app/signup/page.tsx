"use client";
import { WavyBackground } from "../../components/ui/wavy-background";
// import { userState } from "@/atoms/states";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

// Define your SignupPage component here
const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: null, // You can handle profile image separately if needed
  });

  async function createUser() {
    const { email, name, password, profileImage } = userDetails;
    const res = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email.toLowerCase(),
        name: name,
        password: password,
        profileImage: profileImage,
      }),
    });
    const result = await res.json();
    if (result.status) {
      alert("Error: " + result.message);
    } else {
      alert("Account Created!!");
      console.log("accout created!!");
    }
  }

  const handleInputChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  return (
    <WavyBackground>
      <div className="flex justify-center  items-center h-screen w-screen overflow-hidden p-5">
        <div className="h-[450px] sm:w-[450px] rounded-lg bg-black flex flex-col items-center justify-between p-8 border border-purple-400 hover:shadow-lg">
          <div className="text-white text-3xl">Welcome to FUTURE!</div>
          <div className="flex flex-col  rounded-md w-full">
            <form>
              <input
                type="text"
                id="name"
                autoComplete="off"
                placeholder="Name"
                className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="email"
                placeholder="College Email"
                autoComplete="off"
                className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
                onChange={handleInputChange}
              />
              <input
                type="password"
                id="password"
                autoComplete="off"
                placeholder="Password"
                className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
                onChange={handleInputChange}
              />
              <div className="my-5 h-[1px] w-full bg-gray-600"></div>
              <button
                onClick={createUser}
                type="submit" // Change type to button to prevent form submission
                className="h-11 mt-2 flex justify-center items-center text-black border rounded-md bg-white hover:border-emerald-400 hover:text-black w-full"
              >
                Create Account
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

export default SignupPage;
