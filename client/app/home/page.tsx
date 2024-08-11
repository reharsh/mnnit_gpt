"use client";
import { ToggleModeBtn } from "@/components/ui/toggle_mode_btn";
import { DropdownMenuBtn } from "@/components/dropdownmenu";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { LoginCard } from "@/components/logincard";
import HamburgerMenu from "@/components/hamburger";

type Message = {
  role: "user" | "assistant";
  content: string;
  links?: string[];
};

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="h-screen flex w-screen bg-[#111111] flex-col p-6">
        <div className=" h-16 flex justify-between items-center">
          <div className=" flex items-center border rounded-lg dark:border-zinc-800 pr-4 p-1">
            <img
              src="./logo-bg-black.png"
              height={40}
              width={40}
              className=" rounded-full"
            ></img>
            <div className=" text-2xl">Orion AI</div>
          </div>
          <div className=" flex items-center border rounded-lg dark:border-zinc-800 p-2 px-5">
            About Us
          </div>
        </div>
        <div className="h-6"></div>
        <div className="h-full w-full flex flex-col items-center justify-center p-20">
          <div className=" flex items-center justify-center">
            {" "}
            <img src="https://img.icons8.com/?size=100&id=g6oSYUcFy03N&format=png&color=FFFFFF" />
            <div className="text-3xl font-medium flex flex-col md:text-5xl text-white relative z-0 p-4">
              Intelligence³
            </div>
          </div>
          <div className=" mt-10 border py-2 px-5">LAUNCHING SOON!</div>
        </div>
      </div>
    );
  }
  return (
    <WavyBackground>
      <LoginCard></LoginCard>
    </WavyBackground>
  );
}
