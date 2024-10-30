import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationItems } from "../services/data";
import { FiSidebar } from "react-icons/fi";
import vercelLogo from "../assets/vercelLogo.svg";

const Sidebar = () => {
  return (
    <div className="w-full max-w-[300px] h-screen border border-slate-200">
      <div className="flex justify-between items-center p-2">
        <div>
          <Image
            src={vercelLogo}
            width={500}
            height={500}
            alt="POS System Logo"
            className="max-w-10"
          />
        </div>
        <div>
          <FiSidebar className="text-[30px] cursor-pointer" />
        </div>
      </div>
      <nav className="flex flex-col m-auto p-2">
        {navigationItems.map((navigation) => {
          const Icon = navigation.linkIcon;
          return (
            <Link
              href={navigation.LinkUrl}
              key={navigation.linkId}
              className="text-[22px] rounded-md p-1 flex items-center my-2 hover:bg-slate-300"
            >
              <Icon />
              <p className="ml-4">{navigation.linkName}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
