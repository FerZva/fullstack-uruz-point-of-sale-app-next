"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment);
  const formattedPath = pathSegments.slice(1).map((segment, index) => {
    const capitalizedSegment =
      segment.charAt(0).toUpperCase() + segment.slice(1);

    const isLastSegment = index === pathSegments.length - 2;

    return (
      <span
        key={segment}
        className={isLastSegment ? "ml-2 text-black" : "text-gray-500"}
      >
        {index > 0 && " "} {capitalizedSegment}
        {index < pathSegments.length - 2 && " / "}{" "}
      </span>
    );
  });

  return (
    <div className="full flex justify-between px-4 py-6">
      <div>
        <p className="flex w-[500px]">{formattedPath}</p>
      </div>
      <div className="flex ">
        <div className="flex items-center rounded-md border border-slate-300 mr-4 px-2 py-1">
          <CiSearch className="text-[20px] mr-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-100 outline-none"
          />
        </div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
