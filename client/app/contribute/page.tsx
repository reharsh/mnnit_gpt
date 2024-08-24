"use client";
import React, { useState, useEffect } from "react";
import { Home, HomeIcon, Menu, PlusCircle, Send } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ExitIcon,
  GearIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { ToggleModeBtn } from "@/components/ui/toggle_mode_btn";
import { DropdownMenuBtn } from "@/components/dropdownmenu";

interface QnA {
  id: number;
  question: string;
  answer: string;
}

//TODO: Implement simple query submition functionality to the KV storage of vercel.

const CollegeInfoPortal: React.FC = () => {
  const [qnas, setQnas] = useState<QnA[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [isAddingNew, setIsAddingNew] = useState(false); 

  useEffect(() => {
    // Simulating fetching data from an API
    const dummyData: QnA[] = [
      {
        id: 1,
        question: "What are the admission requirements?",
        answer:
          "Requirements include a high school diploma, standardized test scores, and a completed application.",
      },
      {
        id: 2,
        question: "How many majors are offered?",
        answer:
          "Our college offers over 50 undergraduate majors across various disciplines.",
      },
    ];
    setQnas(dummyData);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion && newAnswer) {
      const newQnA: QnA = {
        id: qnas.length + 1,
        question: newQuestion,
        answer: newAnswer,
      };
      setQnas([...qnas, newQnA]);
      setNewQuestion("");
      setNewAnswer("");
      setIsAddingNew(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="p-4 flex justify-between items-center border-b dark:border-gray-700">
        <DropdownMenuBtn />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 flex bg-clip-text text-transparent">
          Moti{" "}
          <div className=" ml-1 font-light text-lg text-black mt-1">
            by orion
          </div>
        </h1>
        <ToggleModeBtn></ToggleModeBtn>
      </header>
      <div className="mb-8 mt-14">
        <h2 className="md:text-2xl text-lg font-semibold mb-4">
          Contribute Information
        </h2>
        {!isAddingNew ? (
          <button
            onClick={() => setIsAddingNew(true)}
            className="flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusCircle className="mr-2" size={20} />
            Add New Q&A
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="question"
                className="block text-sm font-medium text-gray-700"
              >
                Query
              </label>
              <input
                type="text"
                id="question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="answer"
                className="block text-sm font-medium text-gray-700"
              >
                Answer (optional)
              </label>
              <textarea
                id="answer"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Send className="mr-2" size={20} />
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CollegeInfoPortal;
