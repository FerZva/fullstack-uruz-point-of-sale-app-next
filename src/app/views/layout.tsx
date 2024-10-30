import React, { Children } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
