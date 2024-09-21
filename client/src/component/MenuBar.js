import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { RxPencil2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
const navLink = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "create-post",
    icon: <FaPencilAlt />,
  },
  {
    id: 2,
    text: "Quản lí tin đăng",
    path: "manager-post",
    icon: <GoChecklist />,
  },
  {
    id: 3,
    text: "Sửa thông tin cá nhân",
    path: "update-profile",
    icon: <RxPencil2 />,
  },
];
const MenuBar = () => {
  return (
    <div className="lg:flex-col flex-row flex p-3 lg:py-10 bg-slate-100 lg:h-fit">
      {navLink.map((item, key) => (
        <div
          key={item.id}
          className="flex items-center space-x-3 text-lg border-black-1 border-b-2 hover:bg-slate-200"
        >
          {item.icon}
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-black"
            }
          >
            {item.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
