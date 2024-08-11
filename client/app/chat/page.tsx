"use client";
import ChatSection from "@/components/chat-section";
import { DropdownMenuBtn } from "@/components/dropdownmenu";
import { LoginCard } from "@/components/logincard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ToggleModeBtn } from "@/components/ui/toggle_mode_btn";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ExitIcon, GearIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Link, Menu } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const ChatbotUI = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { data: session } = useSession();

  if (session) {
    return (
      <div className="h-screen flex w-screen flex-col p-3">
        <header className="p-4 flex justify-between items-center border-b dark:border-gray-700">
          <DropdownMenuBtn />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 flex bg-clip-text text-transparent">
            Moti{" "}
            <div className=" ml-1 font-light text-lg text-zinc-500 mt-1">
              by orion
            </div>
          </h1>
          <ToggleModeBtn></ToggleModeBtn>
        </header>
        <div className="h-6"></div>
        <div className="w-full flex items-center justify-center h-full">
          <ChatSection />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Card className="md:w-[400px] bg-black text-gray-100">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Ask Moti...
          </CardTitle>
          <CardDescription className="text-xl text-center text-white">
            Use the MNNIT Email Id.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button
            onClick={() => {
              signIn("google");
            }}
            variant="outline"
            className="w-full bg-green-500 text-gray-100 h-14 flex items-center justify-center"
          >
            <FaGoogle className="mr-2 h-5 w-5" />
            Sign in
          </Button>

          <div className="flex justify-center space-x-4">
            <div className="">Follow Us:</div>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatbotUI;
