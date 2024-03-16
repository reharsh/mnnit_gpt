"use client";
import { DropdownMenuBtn } from "@/components/dropdownmenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleModeBtn } from "@/components/ui/toggle_mode_btn";
import { ExitIcon, GearIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const ChatbotUI = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex w-screen p-6 flex-col">
      <div className=" h-16 w-full flex justify-between items-center border rounded-lg dark:border-zinc-800 p-2">
        <DropdownMenuBtn></DropdownMenuBtn>
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          MNNIT GPT
        </div>
        <ToggleModeBtn></ToggleModeBtn>
      </div>
      <div className="h-6"></div>
      <div className="h-full border rounded-lg dark:border-zinc-800 flex items-center justify-center">
        <div className="md:w-[600px] flex-col w-full border dark:border-zinc-800 flex h-full">
          <div className="h-full border dark:border-zinc-800 flex flex-col w-full"></div>
          <div className="h-20 w-full flex items-center space-x-3">
            <Input
              className="text-md h-12 rounded-full"
              type="text"
              placeholder="How can I help you?"
            ></Input>
            <Button className="h-12 w-12 rounded-full" size="icon">
              <PaperPlaneIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotUI;
