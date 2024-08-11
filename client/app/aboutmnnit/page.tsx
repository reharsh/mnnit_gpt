"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

//TODO: Can either put small blog about MNNIT here or just remove this page

const ComingSoonPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-08-15T00:00:00");

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
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-5 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-5 right-5 p-2 rounded-full ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>
      <h1 className="text-5xl font-bold mb-8">Coming Soon</h1>
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
  );
};

export default ComingSoonPage;
