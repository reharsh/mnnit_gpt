import React from "react";
import Image from "next/image";
import { DropdownMenuBtn } from "./dropdownmenu";
import { ToggleModeBtn } from "./ui/toggle_mode_btn";

interface Contact {
  id: number;
  name: string;
  mobile: string;
  designation: string;
  imageUrl: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    name: "John Doe",
    mobile: "+1 234 567 8901",
    designation: "Software Engineer",
    imageUrl: "/api/placeholder/150/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    mobile: "+1 987 654 3210",
    designation: "Product Manager",
    imageUrl: "/api/placeholder/150/150",
  },
  {
    id: 3,
    name: "Bob Johnson",
    mobile: "+1 555 123 4567",
    designation: "UI/UX Designer",
    imageUrl: "/api/placeholder/150/150",
  },
  // Add more contacts as needed
];

const ContactCard: React.FC<{ contact: Contact }> = ({ contact }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image
      src={contact.imageUrl}
      alt={contact.name}
      width={150}
      height={150}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1">{contact.name}</h3>
      <p className="text-gray-600 text-sm mb-1">{contact.designation}</p>
      <p className="text-gray-800 text-sm">{contact.mobile}</p>
    </div>
  </div>
);

const ContactDirectory: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
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
      <h1 className="text-3xl font-bold mb-6">Contact Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactDirectory;
