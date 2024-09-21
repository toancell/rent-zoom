import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLogin, setToken } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkPassword, setCheckPassword] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const seePassword = () => {
    setCheckPassword((prev) => !prev);
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/auth/login";
      const response = await axios(url, {
        method: "POST",
        data: user,
        withCredentials: true,
      });
      if (response.data.user) {
        dispatch(setLogin(response.data.user));
        dispatch(setToken(response.data.token));
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (err) {
      toast.error("Đăng nhập thất bại");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-[50%] p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-black text-2xl font-bold mb-6">Đăng nhập</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2 uppercase">
            Email :
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            className="w-full p-2 rounded-md bg-slate-300 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-4 relative  ">
          <label htmlFor="password" className="block text-black mb-2 uppercase">
            Mật khẩu :
          </label>
          <input
            type={checkPassword ? "text" : "password"}
            id="password"
            name="password"
            value={user.password}
            onChange={handleOnChange}
            className="w-full p-2 pr-8 rounded-md bg-slate-300 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập mật khẩu"
          />
          <div onClick={seePassword} className="absolute bottom-2 right-2">
            {checkPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            onClick={handleLogin}
            className="bg-blue-600 w-full text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Đăng nhập
          </button>
        </div>

        <div className="flex justify-between mt-4">
          <Link
            to={"/request-forget-password"}
            className="text-blue-800 cursor-pointer"
          >
            Bạn quên mật khẩu?
          </Link>
          <Link to={"/signup"} className="text-blue-800 cursor-pointer">
            Tạo tài khoản mới
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
