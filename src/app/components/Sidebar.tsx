"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationItems } from "../services/data";
import { FiSidebar } from "react-icons/fi";
import vercelLogo from "../assets/vercelLogo.svg";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuAction = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <div
      className={`w-full ${
        menu ? "max-w-[300px]" : "max-w-[100px]"
      } h-screen border border-slate-200`}
    >
      <div
        className={`flex justify-between ${
          menu ? "flex-row" : "flex-col"
        } items-center p-2`}
      >
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
          <FiSidebar
            className={`text-[25px] cursor-pointer ${menu ? "" : "mt-2"}`}
            onClick={handleMenuAction}
          />
        </div>
      </div>
      <nav className="flex flex-col m-auto p-2">
        {navigationItems.map((navigation) => {
          const Icon = navigation.linkIcon;
          return (
            <Link
              href={navigation.LinkUrl}
              key={navigation.linkId}
              className="rounded-md p-1 flex items-center my-2 hover:bg-slate-300"
            >
              <Icon className={`${menu ? "" : "m-auto"} text-[25px]`} />
              <p className={`${menu ? "ml-4" : ""}`}>
                {menu ? navigation.linkName : ""}
              </p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
