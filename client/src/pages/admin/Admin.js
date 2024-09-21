import React from "react";
import MenuBar from "../../component/MenuBar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full">
      <aside className="lg:w-1/4 w-full ">
        <MenuBar />
      </aside>
      <main className="lg:w-3/4 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
