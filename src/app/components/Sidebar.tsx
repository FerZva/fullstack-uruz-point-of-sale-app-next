import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationItems } from "../services/data";
import { FiSidebar } from "react-icons/fi";
import vercelLogo from "../assets/vercelLogo.svg";

const Sidebar = () => {
  return (
    <div className="w-full max-w-[300px]">
      <div className="flex justify-between items-center">
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
          <FiSidebar className="text-[30px]" />
        </div>
      </div>
      <nav className="flex flex-col">
        {navigationItems.map((navigation) => (
          <Link
            href={navigation.LinkUrl}
            key={navigation.linkId}
            className="text-[20px]"
          >
            {navigation.linkName}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
