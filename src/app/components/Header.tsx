import React from "react";
import { CiSearch } from "react-icons/ci";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="full flex justify-between px-4 py-6">
      <div>
        <p>Route / sub-route</p>
      </div>
      <div className="flex ">
        <div className="flex items-center rounded-md border border-slate-300 mr-4 px-2 py-1">
          <CiSearch className="text-[20px] mr-4" />
          <input
            type="text"
            name=""
            id=""
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
