"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { ToggleModeBtn } from "@/components/ui/toggle_mode_btn";
import { DropdownMenuBtn } from "@/components/dropdownmenu";
import { Button } from "@/components/ui/button";

const ComingSoonPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T00:00:00");

    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
      {" "}
      <header className="p-4 flex justify-between items-center border-b dark:border-gray-700">
        <DropdownMenuBtn />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 flex bg-clip-text text-transparent">
          Moti{" "}
          <div className=" ml-1 font-light text-lg text-zinc-500 mt-1">
            by orion
          </div>
        </h1>
        <Button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          variant="ghost"
          size="icon"
        >
          <ToggleModeBtn></ToggleModeBtn>
        </Button>
      </header>
      <div
        className={`min-h-screen w-full flex flex-col items-center justify-center p-5 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <h1 className="text-5xl font-bold mb-8">Career Coach Coming Soon...</h1>
        <p className="text-xl mb-12">
          We're working hard to bring you something amazing!
        </p>
        <div className="grid grid-cols-4 gap-4 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white shadow-md"
              }`}
            >
              <div className="text-3xl font-bold">{value}</div>
              <div className="text-sm uppercase">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
