import React from "react";
import { Button } from "./ui/button";
import { FaRupeeSign } from "react-icons/fa";
import { ChatHandler } from "./ui/chat";
import { Separator } from "./ui/separator";

const Suggestions = () => {
  return (
    <div className=" flex md:flex-row flex-col md:space-y-0 space-y-4 items-center justify-center space-x-5 h-full">
      <div className="flex w-96 items-center justify-center">
        <div className="text-3xl mr-3">💰</div>{" "}
        <div className=" text-zinc-500">
          What were the Placements
          <br />
          stats last year?
        </div>
      </div>
      <Separator className=" md:flex hidden h-24" orientation="vertical" />
      <Separator className=" md:hidden w-96" />
      <div className="flex w-96 items-center justify-center">
        <div className="text-3xl mr-3">🎉</div>
        <div className="text-zinc-500">
          Where to go for my
          <br />
          friends Birthday Party?
        </div>
      </div>
      <Separator className=" md:flex hidden h-24" orientation="vertical" />
      <Separator className=" md:hidden w-96" />
      <div className="flex w-96 items-center justify-center">
        <div className="text-3xl mr-3">🎯</div>{" "}
        <div className="text-zinc-500">
          Sports Clubs to join
          <br />
          for me?
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
