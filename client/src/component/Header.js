import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { TiUserAddOutline } from "react-icons/ti";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className="h-16 py-5 bg-slate-800 w-full flex justify-between items-center px-8 min-w-md">
          
          <div>
            <span className="text-white">This is Logo</span>
          </div>
          
          
          <div className="flex space-x-8">
            <NavLink  className="flex items-center space-x-2 text-white ">
              <CiHeart size={24} />
              <span className="hover:underline">Yêu thích</span>
            </NavLink>
            <NavLink to={"login"} className="flex items-center space-x-2 text-white">
              <TiUserAddOutline size={24} />
              <span className="hover:underline">Đăng nhập</span>
            </NavLink>
            <NavLink to={"signup"} className="flex items-center space-x-2 text-white">
              <IoIosLogOut />
              <span className="hover:underline">Đăng kí</span>
            </NavLink>
            <NavLink className="flex items-center space-x-2 text-white px-4 py-2 bg-red-500 rounded-full">
              <MdOutlineLocalPostOffice/>
              <span className="hover:underline">Đăng tin miễn phí</span>
            </NavLink>
          </div>
        </div>
      )
    }

export default Header
