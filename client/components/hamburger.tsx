// components/HamburgerMenu.js
import { useState } from "react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col justify-around w-8 h-8 cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`h-1 bg-white rounded-full transition-transform duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 bg-white rounded-full transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`h-1 bg-white rounded-full transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
      <div
        className={`absolute right-0 top-10 bg-white shadow-lg rounded-md transition-transform duration-300 ${
          open ? "transform scale-100" : "transform scale-0"
        }`}
      >
        <a
          href="/home"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
        >
          coming soon...
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
