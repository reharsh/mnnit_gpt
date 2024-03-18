"use client";
import Link from "next/link";
import React from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <div className="text-gray-500 md:w-[800px] w-[500px] flex-col flex items-center justify-center z-10 p-6 absolute mt-10">
        Introducing
        <div className="h-3"></div>
        <div className="md:text-5xl text-3xl flex font-bold text-gray-200">
          <ReactTyped
            strings={["AI Powered Answer Engine", "Senior Support On Steroids"]}
            typeSpeed={100}
            loop
          />
        </div>
        <div className="h-8"></div>
        <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          MNNIT GPT
        </div>
        <div className="h-56"></div>
        <div className="flex flex-col space-y-4 my-8">
          {" "}
          <Link href="/chat">
            {" "}
            <button className="relative inline-flex h-12 w-96 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                GET STARTED
              </span>
            </button>
          </Link>
          <Link href="http://www.mnnit.ac.in/">
            <button className="inline-flex h-12 w-96 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              visit MNNIT
            </button>
          </Link>
        </div>
      </div>
      <div className="z-5 relative">
        <img className="  opacity-85" src="wave.gif"></img>
      </div>
    </div>
  );
}
