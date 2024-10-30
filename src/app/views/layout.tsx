import React, { Children } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-wrap">
      <Sidebar />
      <div className="flex flex-col justify-between">
        <Header />
        {children}
      </div>
    </div>
  );
}
