import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { SiScaleway } from "react-icons/si";
import { CiDollar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
const InformationAboutRoom = ({ data }) => {
  console.log(data);
  const startDate = new Date(data.createdAt);
  const currentDate = new Date();

  const time = currentDate - startDate;

  const countDay = Math.floor(time / (1000 * 60 * 60 * 24)) + 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  const handleNext = () => {
    if (data?.imgList && currentIndex < data.imgList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className="space-y-6 p-5 bg-white shadow-md rounded-lg">
      <div className="flex justify-center bg-black relative">
        <span
          onClick={handlePrevious}
          className="p-3 hover:bg-blue-200 bg-white rounded-full absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer hover:shadow-lg"
        >
          <GrFormPrevious size={30} />
        </span>
        <img src={data?.imgList[currentIndex]?.url} className="h-[400px]" alt="" />
        <span
          onClick={handleNext}
          className="p-3 bg-white hover:bg-blue-200 rounded-full absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer hover:shadow-lg"
        >
          <MdOutlineNavigateNext size={30} />
        </span>
      </div>
      <div className="space-y-3">
        <h2 className="uppercase text-red-700 lg:text-3xl text-md font-bold">
          {data.title}
        </h2>
        <div className="flex items-center space-x-2 text-gray-700">
          <FaLocationDot size={20} className="text-blue-600" />
          <p>
            Địa chỉ: {data.street}, {data.ward}, {data.district},{" "}
            {data.province}, {data.city}
          </p>
        </div>
        <div className="flex justify-start space-x-10 text-gray-700">
          <div className="flex space-x-2 items-center">
            <CiDollar size={20} />
            <p className="text-green-700 font-bold">
              {data.monney} triệu/tháng{" "}
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <SiScaleway size={20} />
            <p>{data.acreage} m2 </p>
          </div>
          <div className="flex space-x-2 items-center">
            <CiClock2 size={20} />
            <p>{countDay} ngày trước</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-bold mb-3">Thông tin mô tả</h3>
        {data.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        <p className="bg-gray-200 text-center py-3 mt-3 rounded-md">
          Ngày đăng: {formatDate(data.createdAt)}
        </p>
      </div>
      <div className="mt-5">
        <table className="border-gray-300 border w-full text-center rounded-md">
          <tbody>
            <tr>
              <td className="border-gray-300 border py-2">Liên hệ:</td>
              <td className="border-gray-300 border py-2">
                {data.userCreated}
              </td>
            </tr>
            <tr>
              <td className="border-gray-300 border py-2">Điện thoại:</td>
              <td className="border-gray-300 border py-2">{data.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InformationAboutRoom;
