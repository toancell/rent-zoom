import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { SiZalo } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const CallUser = ({ data }) => {
  
  const [like, setLike] = useState(false);

  const handleCallZalo = () => {
    window.location.href = `https://zalo.me/${data.phone}`;
  };

  const handleLike =async () => {
    setLike(!like);
    
  };

  return (
    <div className="bg-yellow-300 space-y-2 w-full h-fit rounded-lg flex items-center justify-center flex-col py-3 shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        src={data.profile || "https://phongtro123.com/images/default-user.png"}
        className="w-[100px] h-[100px] rounded-full border-2 border-white"
        alt=""
      />
      <span className="text-lg font-semibold">{data.userCreated}</span>

      <div className="flex space-x-3 bg-green-500 items-center justify-center w-[80%] rounded-lg py-2 hover:bg-green-600 transition-colors duration-200">
        <IoIosCall size={25} className="text-white" />
        <span className="text-white font-bold text-xl">{data.phone}</span>
      </div>

      <div
        onClick={handleCallZalo}
        className="flex space-x-3 bg-white items-center justify-center w-[80%] border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      >
        <SiZalo size={30} className="text-black" />
        <span className="text-black font-bold text-lg">Gọi Zalo</span>
      </div>

      <div
        onClick={handleLike}
        className="flex space-x-3 bg-white items-center justify-center w-[80%] border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      >
        {like ? (
          <FaHeart size={25} className="text-red-600" />
        ) : (
          <CiHeart size={30} className="text-black" />
        )}
        <span className="text-black font-bold text-lg">Yêu thích</span>
      </div>
    </div>
  );
};

export default CallUser;
