import React from "react";
import Image from "next/image";
import { DropdownMenuBtn } from "@/components/dropdownmenu";
import { ToggleModeBtn } from "@/components/ui/toggle_mode_btn";
import { Button } from "@/components/ui/button";
import { MessageCircleIcon } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from "next/link";

//TODO: Add more contacts by their clubs. should be provided in directory.json file

interface Member {
  name: string;
  mob: string;
  imgUrl: string;
  designation: string;
}

interface Category {
  [key: string]: Member[];
}

interface DirectoryData {
  "Cultural Committees": Member[];
  "Technical Committees": Member[];
  "Sports Clubs": Member[];
  "Other Clubs": Member[];
}

const directoryData: DirectoryData = {
  "Cultural Committees": [
    {
      name: "Krishn Kumar",
      mob: "7781874388",
      imgUrl: "/krishn.jpg",
      designation: "Rajasthani Committee - 3rd Year",
    },
    {
      name: "Aditya Kumar",
      mob: "7461820389",
      imgUrl: "/adityakumar.jpg",
      designation: "Bhangra Committee - 3rd Year",
    },
    {
      name: "Sriram Bhattu",
      mob: "bhattusriram27@gmail.com",
      imgUrl: "/sriram.jpg",
      designation: "South Folk - 3rd Year",
    },
    {
      name: "Lakshya Puripanda",
      mob: "9381986054",
      imgUrl: "/lakshya.jpg",
      designation: "South Folk - 3rd Year",
    },
    {
      name: "Chetan Kumar",
      mob: "9116506017",
      imgUrl: "/chetan.jpg",
      designation: "Music - 3rd Year",
    },
    {
      name: "Harsh Ranjan",
      mob: "7856078705",
      imgUrl: "/harshranjan.jpg",
      designation: "Core Drama - 3rd Year",
    },
    {
      name: "Vanshika Yadvendu",
      mob: "yadvenduvanshika@gmail.com",
      imgUrl: "/vanshika.jpg",
      designation: "Core Drama - 3rd Year",
    },
    {
      name: "Sanskar Sharma",
      mob: "9451361687",
      imgUrl: "/sanskar.jpg",
      designation: "Footprints - 3rd Year",
    },
    {
      name: "Yash Lilar",
      mob: "",
      imgUrl: "",
      designation: "Garba - 3rd Year",
    },
    {
      name: "Usha Nitwal",
      mob: "usha.20225099@mnnit.ac.in",
      imgUrl: "",
      designation: "Rajasthani Committee - 3rd Year",
    },
    {
      name: "Sneha Pathak",
      mob: "sneha.20227054@mnnit.ac.in",
      imgUrl: "",
      designation: "Bhangra Committee - 3rd Year",
    },
    {
      name: "Devansh Sharma",
      mob: "6378459369",
      imgUrl: "",
      designation: "Quinty - 3rd Year",
    },
    {
      name: "Ashmit",
      mob: "9832055882",
      imgUrl: "",
      designation: "MHM - 3rd Year",
    },
    {
      name: "Manav Bhatt",
      mob: "8791865158",
      imgUrl: "",
      designation: "MHM - 3rd Year",
    },
    {
      name: "Hotu Ayemi",
      mob: "7005867477",
      imgUrl: "",
      designation: "Footprints - 3rd Year",
    },
    {
      name: "Siddharth Kaurav",
      mob: "",
      imgUrl: "",
      designation: "Oration - 3rd Year",
    },
    {
      name: "Utkarsha Pandey",
      mob: "utkarsha.20221112@mnnit.ac.in",
      imgUrl: "/PERSON.png",
      designation: "Arts - 3rd Year",
    },
    {
      name: "Sarvagya",
      mob: "",
      imgUrl: "",
      designation: "Arts - 3rd Year",
    },
  ],
  "Technical Committees": [
    {
      name: "Robotics",
      mob: "",
      imgUrl: "",
      designation: "",
    },
    {
      name: "Abhay Pratap Singh",
      mob: "8077100909",
      imgUrl: "",
      designation: "Aeroclub - 3rd Year",
    },
    {
      name: "Astro",
      mob: "",
      imgUrl: "",
      designation: "",
    },
    {
      name: "Cybersec",
      mob: "",
      imgUrl: "",
      designation: "",
    },
    {
      name: "CC",
      mob: "",
      imgUrl: "",
      designation: "",
    },
  ],
  "Sports Clubs": [
    {
      name: "Utkarsha Pandey",
      mob: "",
      imgUrl: "",
      designation: "Athletics - 3rd Year",
    },
    // ... other sports club members
  ],
  "Other Clubs": [
    {
      name: "Avinash Kumar",
      mob: "8252965198",
      imgUrl: "",
      designation: "Anokhi Pehel - 3rd Year",
    },
    // ... other club members
  ],
};

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    {member.imgUrl ? (
      <Image
        src={member.imgUrl}
        alt={member.name}
        width={150}
        height={150}
        style={{ width: "100%", height: "auto" }}
      />
    ) : (
      // <Image
      //   src="/PERSON.png"
      //   alt={member.name}
      //   width={100}
      //   height={100}
      //   style={{ width: "100%", height: "auto" }}
      // />
      <Image
        src="/PERSON.png"
        alt={member.name}
        width={150}
        height={150}
        style={{ width: "100%", height: "auto" }}
      />
    )}
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1">{member.name}</h3>
      <p className="text-gray-600 text-sm mb-1">{member.designation}</p>
      {member.mob && <p className="text-gray-800 text-sm">{member.mob}</p>}
    </div>
  </div>
);

const CategorySection: React.FC<{ title: string; members: Member[] }> = ({
  title,
  members,
}) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <MemberCard key={`${title}-${index}`} member={member} />
      ))}
    </div>
  </div>
);

const CommitteeDirectory: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="p-4 flex justify-between mb-10 items-center border-b dark:border-gray-700">
        <DropdownMenuBtn />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 flex bg-clip-text text-transparent">
          Moti{" "}
          <div className=" ml-1 font-light text-lg text-zinc-500 mt-1">
            by orion
          </div>
        </h1>
        <Link href="/chat">
          {" "}
          <div className=" flex items-center justify-center space-x-2">
            <Button variant="outline" size="icon">
              <MessageCircleIcon color="gray" />
            </Button>
          </div>
        </Link>
      </header>
      {Object.entries(directoryData).map(([category, members]) => (
        <CategorySection key={category} title={category} members={members} />
      ))}
    </div>
  );
};

export default CommitteeDirectory;
