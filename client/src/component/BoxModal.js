import React from "react";
import { NavLink } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { IoIosExit } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import { setLogOut } from "../slice/authSlice";
import { useDispatch } from "react-redux";
const navLink = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "admin/create-post",
    icon: <FaPencilAlt />,
  },
  {
    id: 2,
    text: "Quản lí tin đăng",
    path: "admin/manager-post",
    icon: <GoChecklist />,
  },
  {
    id: 3,
    text: "Thoát",
    path: "/",
    icon: <IoIosExit />,
  },
];

const BoxModal = ({ handleClick }) => {
  const dispatch = useDispatch()
  const LogOut = async (id) => {
    if (id === 3) {
      try {
        const response = await axios({
          url: "api/auth/logout",
          method: "POST",
          withCredentials: true,
        });
        if(response.data.success){
          toast.success(response.data.message);
          localStorage.clear()
          dispatch(setLogOut())
          window.location.reload()
          
        }
      } catch (err) {
        toast.error("Can not log out");
      }
    }else{
      return null;
    }
  };
  return (
    <div className="flex z-60 flex-col space-y-2">
      {navLink.map((item, key) => (
        <div
          key={item.id}
          className="flex space-x-2 justify-start pl-4 items-center"
        >
          {item.icon}
          <NavLink
            onClick={(handleClick,()=>{LogOut(item.id)} )}
            className="text-md w-fit hover:underline"
            to={item.path}
          >
            {item.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default BoxModal;
