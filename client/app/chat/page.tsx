"use client";
import ChatSection from "@/components/chat-section";
import { DropdownMenuBtn } from "@/components/dropdownmenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleModeBtn } from "@/components/ui/toggle_mode_btn";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ExitIcon, GearIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const ChatbotUI = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex w-screen flex-col">
      <div className=" h-16 w-full flex justify-between items-center border rounded-lg dark:border-zinc-800 p-2">
        <DropdownMenuBtn></DropdownMenuBtn>
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          MNNIT GPT
        </div>
        <ToggleModeBtn></ToggleModeBtn>
      </div>
      <div className="h-6"></div>
      <div className="w-full flex items-center justify-center h-full">
        <ChatSection />
      </div>
      <div className="z-5 relative">
        <img
          height={60}
          width={60}
          src="https://i.redd.it/s13osxs1dqla1.gif"
        ></img>
      </div>
    </div>
  );
};

export default ChatbotUI;
