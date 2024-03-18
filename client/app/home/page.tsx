"use client";
import { ToggleModeBtn } from "@/components/ui/toggle_mode_btn";
import { DropdownMenuBtn } from "@/components/dropdownmenu";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { LoginCard } from "@/components/logincard";

type Message = {
  role: "user" | "assistant";
  content: string;
  links?: string[];
};

export default function Home() {
  const { data: session } = useSession();

  if (session) {
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
        <div className="h-full w-full flex items-center justify-center">
          <Link href="/chat">
            {" "}
            <button className="relative inline-flex h-12 w-96 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                GET STARTED
              </span>
            </button>
          </Link>
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
  }
  return (
    <WavyBackground>
      <LoginCard></LoginCard>
    </WavyBackground>
  );
}
