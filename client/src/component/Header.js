import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { TiUserAddOutline } from "react-icons/ti";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { TbTableOptions } from "react-icons/tb";
import BoxModal from "./BoxModal";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLogin, setToken, setCheckLogin } from "../slice/authSlice";

const Header = () => {
  const token = useSelector((state) => state.user.token);
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  
  dispatch(setToken(token));

  useEffect(() => {
    if (!token) {
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        dispatch(setToken(savedToken));
      }
    }
  }, [token, dispatch]);

  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/auth/detail-user`, {
          withCredentials: true,
        });
        if (response?.data.success) {
          dispatch(setLogin(response?.data.data));
          setUserData(response?.data.data);
          dispatch(setCheckLogin(true));
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (token) {
      getDetailUser();
    }
  }, [token, dispatch]);

  const [boxModal, setBoxModal] = useState(false);
  const TurnModal = () => {
    setBoxModal(!boxModal);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 h-16 py-5 bg-slate-800 flex justify-between items-center px-8">
      <div>
        <span className="text-white">This is Logo</span>
      </div>
      <div className="flex space-x-8">
        
        {userData ? (
          <div className="flex justify-center items-center text-white space-x-8">
            <div className="flex justify-center items-center space-x-2">
              <img
                src={userData?.profile || "https://phongtro123.com/images/default-user.png"}
                className="w-[40px] h-[40px] object-cover rounded-full"
                alt=""
              />
              <div>
                <p className="text-sm">Xin chào, {userData.name}</p>
              </div>
            </div>
            <div className="flex  justify-center items-center space-x-2 hover:cursor-pointer group relative">
              <TbTableOptions size={20} />
              <div className="group-hover:underline" onClick={TurnModal}>
                Quản lí tài khoản
              </div>
              {boxModal && (
                <div className="absolute w-[200px] bg-slate-100 shadow-md z-60 text-black rounded-lg py-2 px-2 right-0 top-12">
                  <BoxModal handleClick={TurnModal} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <NavLink to={"login"} className="flex items-center space-x-2 text-white">
              <TiUserAddOutline size={24} />
              <span className="hover:underline">Đăng nhập</span>
            </NavLink>
            <NavLink to={"signup"} className="flex items-center space-x-2 text-white">
              <IoIosLogOut />
              <span className="hover:underline">Đăng kí</span>
            </NavLink>
          </>
        )}
        <NavLink className="flex items-center space-x-2 text-white px-4 py-2 bg-red-500 rounded-full">
          <MdOutlineLocalPostOffice />
          <span className="hover:underline">Đăng tin miễn phí</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
