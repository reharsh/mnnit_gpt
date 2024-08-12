import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo-bg-black.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />

          <span className="font-bold ml-[10px] text-gray-300">Orion AI</span>
        </a>

        <div className="flex flex-row gap-5">
          <Link href="https://www.instagram.com/orion_ai_23/">
            {" "}
            <Image
              src="/instagram.svg"
              alt="ig"
              key="ig"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
