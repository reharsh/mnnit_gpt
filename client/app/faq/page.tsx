import React from "react";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "../../components/ui/collapsible";

export default function Component() {
  return (
    <div className="h-[1000px] w-screen bg-black text-white flex flex-col p-6">
      <div className="w-full flex flex-col items-center justify-center my-6x">
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-300 bg-clip-text text-transparent text-5xl font-bold">
          FAQs
        </div>
        <div className="text-white text-5xl font-bold my-6">about MNNIT</div>
      </div>
      <div className="h-full text-xl w-full flex flex-col p-6 items-center ">
        <div className=" sm:w-1/2 border border-gray-700 my-2 py-4 flex items-center justify-center rounded-xl font-bold p-4">
          {" "}
          <Collapsible>
            <CollapsibleTrigger>
              <div className="font-bold">
                Q. What are Financial Aid options available here?
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="text-gray-400">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in metus quis tellus ultricies aliquet. Sed convallis hendrerit
                urna vitae maximus. Morbi pellentesque quam neque, vitae
                condimentum tellus vestibulum ut. Ut eros est, malesuada nec sem
                vel, lobortis vehicula dui. Etiam sit amet mollis arcu. Mauris
                bibendum consectetur quam, vel consectetur justo volutpat sit
                amet. Praesent vulputate vel ipsum sit amet placerat. Phasellus
                eget ex non quam vehicula rutrum.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>{" "}
        <div className=" sm:w-1/2 border border-gray-700 my-2 py-4 flex items-center justify-center rounded-xl font-bold p-4">
          {" "}
          <Collapsible>
            <CollapsibleTrigger>
              <div className="font-bold">
                Q. Clubs and Fests in the college.
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="text-gray-400">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in metus quis tellus ultricies aliquet. Sed convallis hendrerit
                urna vitae maximus. Morbi pellentesque quam neque, vitae
                condimentum tellus vestibulum ut. Ut eros est, malesuada nec sem
                vel, lobortis vehicula dui. Etiam sit amet mollis arcu. Mauris
                bibendum consectetur quam, vel consectetur justo volutpat sit
                amet. Praesent vulputate vel ipsum sit amet placerat. Phasellus
                eget ex non quam vehicula rutrum.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>{" "}
        <div className=" sm:w-1/2 border border-gray-700 my-2 py-4 flex items-center justify-center rounded-xl font-bold p-4">
          {" "}
          <Collapsible>
            <CollapsibleTrigger>
              <div className="font-bold">
                Q. Info about Black Dot and what not to do?
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="text-gray-400">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in metus quis tellus ultricies aliquet. Sed convallis hendrerit
                urna vitae maximus. Morbi pellentesque quam neque, vitae
                condimentum tellus vestibulum ut. Ut eros est, malesuada nec sem
                vel, lobortis vehicula dui. Etiam sit amet mollis arcu. Mauris
                bibendum consectetur quam, vel consectetur justo volutpat sit
                amet. Praesent vulputate vel ipsum sit amet placerat. Phasellus
                eget ex non quam vehicula rutrum.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
