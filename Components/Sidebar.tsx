import React, { useState } from "react";
import react from "../assets/react.svg";
import { SiReactiveresume } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import CreateCard from "./Cards";
import ImportCard from "./import-card";

const menuItem = [
  {
    icons: <SiReactiveresume size={30} />,
    label: "Resume",
    section: "resume",
  },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("resume");

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <nav className="shadow-md h-screen w-80 flex flex-col duration-500 relative">
        {/* Header */}
        <div className=" px-2 py-2 h-20 flex justify-between items-center">
          <img src={react} alt="logo" className="w-10 rounded-md" />
        </div>

        {/* Body */}
        <ul className="flex-1">
          {menuItem.map((item, index) => (
            <li
              key={index}
              className={`px-20 py-9 my-1 rounded-md duration-300 cursor-pointer flex gap-3 items-center ${
                activeSection === item.section ? "bg-zinc-800" : "bg-zinc-800"
              }`}
              onClick={() => setActiveSection(item.section)}
            >
              <div>{item.icons}</div>
              <p style={{ fontSize: 20 }}>{item.label}</p>
            </li>
          ))}
        </ul>

        {/* Footer with Username and Settings */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4">
          {/* Username */}
          <div className="flex items-center gap-2">
            <FaCircleUser size={30} />
            <div>
              <p>Username</p>
              <span className="text-xs">username@gmail.com</span>
            </div>
          </div>
          {/* Settings */}
          <div
            className="cursor-pointer hover:bg-zinc-800 p-2 rounded-md"
            onClick={() => setActiveSection("settings")}
          >
            <IoSettingsOutline size={30} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex p-6">
        {activeSection === "resume" && (
          <>
            <CreateCard />
            <ImportCard />
          </>
        )}
        {activeSection === "settings" && (
          <div className="text-white text-lg">
            <h2>Settings Section</h2>
            <p>Here you can configure your application settings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
