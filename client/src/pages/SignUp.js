import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UploadImage from "../middleware/UploadImage";
const SignUp = () => {
  const navigate = useNavigate();
  const [checkPassword, setCheckPassword] = useState(true);
  const [imgUpload, setImgUpload] = useState();
  const seePassword = () => {
    setCheckPassword((prev) => !prev);
  };
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    password: "",
    email: "",
  });
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const uploadImg = async (e) => {
    e.preventDefault();

    const fileInput = e.target.files[0];
    if (!fileInput) {
      toast.error("Không có tệp nào được chọn");
      return;
    }

    if (fileInput.size > 5 * 1024 * 1024) {
      toast.error("Chỉ tải tệp dưới 5MB");
      return;
    }

    try {
      const file = await UploadImage(fileInput);
      if (!file || !file.secure_url) {
        toast.error("Không thể tải ảnh lên");
        return;
      }
      setImgUpload(file.secure_url);
      toast.success("Tải ảnh lên thành công");
    } catch (err) {
      toast.error("Đã xảy ra lỗi khi tải ảnh lên");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/api/auth/signup";
    if (!imgUpload) {
      toast.error("Bạn chưa cập nhật ảnh đại diện");
    }
    const uploadData = { ...userData, profile: imgUpload };
    try {
      const response = await axios(url, {
        method: "POST",
        data: uploadData,
        withCredentials: true,
      });
      if (response) {
        toast.success("Da tao tai khoan thanh cong");
      }
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.message || "Something went wrong");
    }
  };
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <form className="w-[50%] p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-black text-2xl font-bold mb-6">Đăng kí</h2>
        <div className="flex justify-center">
          <div className="w-[100px] h-[100px] rounded-full relative outline border-gray-500 ">
            <img
              src={
                imgUpload || "https://phongtro123.com/images/default-user.png"
              }
              className="rounded-full w-full h-full object-cover"
              alt=""
            />
            <input
              type="file"
              onChange={uploadImg}
              className="w-full absolute inset-0 top-8 opacity-0 z-10 cursor-pointer"
            />
            {!imgUpload ? (
              <span className="absolute text-xs inset-0 flex justify-center items-center font-bold text-blue-800">
                Upload profile
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-black mb-2 uppercase">
            Name :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={handleOnChange}
            className="w-full p-2 rounded-md bg-slate-300 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2 uppercase">
            Email :
          </label>
          <input
            name="email"
            value={userData.email}
            onChange={handleOnChange}
            type="text"
            id="email"
            className="w-full p-2 rounded-md bg-slate-300 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-black mb-2 uppercase">
            Phone :
          </label>
          <input
            value={userData.phone}
            type="text"
            name="phone"
            onChange={handleOnChange}
            id="phone"
            className="w-full p-2 rounded-md bg-slate-300 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>

        <div className="mb-4 relative  ">
          <label htmlFor="password" className="block text-black mb-2 uppercase">
            Mật khẩu :
          </label>
          <input
            type={checkPassword ? "text" : "password"}
            id="password"
            value={userData.password}
            onChange={handleOnChange}
            name="password"
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
            onClick={handleSubmit}
            className="bg-blue-600 w-full text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Đăng kí
          </button>
        </div>

        <div className="flex justify-between mt-4">
          <Link to={"/login"} className="text-blue-800 cursor-pointer">
            Bạn đã có tài khoản ? Đăng nhập
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
