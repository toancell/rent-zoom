import React from "react";
import MenuBar from "../../component/MenuBar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full h-screen">
      <aside className="lg:w-1/6 w-full lg:h-full relative ">
        <MenuBar />
      </aside>
      <main className="lg:w-5/6 w-full h-full p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
