import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const ComponentLayout: React.FC = () => {
  return (
    <section className="flex min-h-screen">
      <aside className="w-1/4 max-lg:hidden">
        <Sidebar />
      </aside>
      
      <div className="">
        <Outlet />
      </div>
    </section>
  );
};

export default ComponentLayout;
