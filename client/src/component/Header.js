import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { TiUserAddOutline } from "react-icons/ti";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { TbTableOptions } from "react-icons/tb";
import BoxModal from "./BoxModal";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLogin, setToken,setCheckLogin } from "../slice/authSlice";
const Header = () => {
  const token = useSelector(
    (state) => state.user.token || localStorage.getItem("token")
  );
  console.log("token", token);

  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  dispatch(setToken(token));
  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const response = await axios({
          url: `${process.env.REACT_APP_BACKEND}/api/auth/detail-user`,
          method: "GET",
          withCredentials: true,
        });
        if (response?.data.success) {
          dispatch(setLogin(response?.data.data));
          setUserData(response?.data.data);
          dispatch(setCheckLogin(true))
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (token) {
      getDetailUser();
    }
  }, [token,dispatch]);

  const [boxModal, setBoxModal] = useState(false);
  console.log("userData", userData);
  const TurnModal = () => {
    setBoxModal(!boxModal);
  };
  return (
    <div className="h-16 py-5  bg-slate-800 w-full flex justify-between items-center px-8 min-w-md">
      <div>
        <span className="text-white">This is Logo</span>
      </div>
      <div className="flex space-x-8">
        <NavLink className="flex items-center space-x-2 text-white ">
          <CiHeart size={24} />
          <span className="hover:underline">Yêu thích</span>
        </NavLink>
        { userData ? (
          <>
            <div className="flex justify-center items-center text-white space-x-8">
              <div className="flex justify-center items-center space-x-2">
                <img
                  src="https://phongtro123.com/images/default-user.png"
                  className="w-[30px] object-cover rounded-full"
                  alt=""
                />
                <div>
                  <p className="text-sm">{userData.name}</p>
                  <p className="text-sm">id: {userData._id}</p>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 hover:cursor-pointer group relative ">
                <TbTableOptions size={20} />
                <div className="group-hover:underline " onClick={TurnModal}>
                  Quản lí tài khoản
                </div>
                {boxModal ? (
                  <div className="absolute w-[200px] bg-slate-100 shadow-md z-50 text-black rounded-lg py-2 px-2 right-0  top-12">
                    <BoxModal handleClick={TurnModal} />
                  </div>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to={"login"}
              className="flex items-center space-x-2 text-white"
            >
              <TiUserAddOutline size={24} />
              <span className="hover:underline">Đăng nhập</span>
            </NavLink>
            <NavLink
              to={"signup"}
              className="flex items-center space-x-2 text-white"
            >
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
