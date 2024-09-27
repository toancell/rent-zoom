import React, { useState } from "react";
import { useSelector } from "react-redux";
import UploadFile from "../../middleware/UploadImage";
import toast from "react-hot-toast";
import axios from "axios";
import { setLogin } from "../../slice/authSlice";
import { useDispatch } from "react-redux";
const ProfileEdit = () => {
const dispatch= useDispatch()
  const userData = useSelector((state) => state.user.user);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState(userData.name || "");
  const [phone, setPhone] = useState(userData.phone || "");
     console.log(userData)
  const handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Chỉ tải tệp dưới 5MB");
      return;
    }

    try {
      const uploadedFile = await UploadFile(file);
      setProfile(uploadedFile.secure_url);
      toast.success("Tải lên thành công!");
    } catch (error) {
      toast.error("Có lỗi xảy ra khi tải lên hình ảnh");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault()
    if(!name || !phone ){
        toast.error("Khong duoc bo trong")
    }
    if(!profile){
        profile =userData.profile
    }
    try{
        const response = await axios({
            method:"PUT",
            url: `${process.env.REACT_APP_BACKEND}/api/auth/update-profile/${userData._id}`,
            data: {profile,name, phone},
            withCredentials: true
        })
        console.log("tra ve", response)
        if(response.data.success){
            dispatch(setLogin(response.data.updateData))
            toast.success("Cập nhật thành công ")
        }
    }catch(err){
        toast.error("Có lỗi xảy ra")
    }
  };

  return (
    <div className="flex w-full h-fit mt-3 justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-center mx-auto">
        <img
          src={
            profile
              ? profile
              : userData.profile || "https://phongtro123.com/images/default-user.png"
          }
          className="w-[300px] h-[300px] rounded-full  object-cover"
          alt="User Profile"
        />
        <div className="relative">
          <button className="py-2 px-3 rounded-full text-md font-bold text-blue-500 border-black border mt-4">
            Change Profile
          </button>
          <input
            id="profileInput"
            type="file"
            accept="image/*"
            className="absolute w-full left-4 opacity-0 z-10 bottom-0 cursor-pointer"
            onChange={handleUpload}
          />
        </div>
      </div>
      <div className="w-1/2">
        <label htmlFor="" className="text-2xl underline">
          Update Profile:
        </label>
        <form className="flex flex-col space-y-2 mt-3" onSubmit={handleUpdate}>
          <label className="mb-2">
            Name:
            <input
              type="text"
              className="border mt-2 w-full p-2 mb-4 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="mb-2">
            Phone:
            <input
              type="text"
              value={phone}
              className="border mt-2 w-full p-2 mb-4 rounded"
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="py-2 px-4 rounded-full text-white bg-blue-500"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
