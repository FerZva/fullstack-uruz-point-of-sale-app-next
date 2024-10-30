import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="full flex justify-between px-4 py-6">
      <div>
        <p>Route / sub-route</p>
      </div>
      <div className="flex ">
        <div>search bar</div>
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
