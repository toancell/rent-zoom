import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ data }) => {
  const nav = useNavigate();
  const startDate = new Date(data.createdAt);
  const currentDate = new Date();

  const time = currentDate - startDate;
  const countDay = Math.floor(time / (1000 * 60 * 60 * 24)) + 1;

  const maxLength = 100;
  const truncatedDescription =
    data.description.length > maxLength
      ? data.description.substring(0, maxLength) + "..."
      : data.description;

  const handleClick = () => {
    nav(`/detail/${data._id}`);
  };

  return (
    <div
      className="flex justify-around space-x-4 border border-gray-200 rounded-lg p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 transition duration-200 cursor-pointer"
      onClick={handleClick}
    >
      <div className=" flex justify-center items-center">
        <img
          className="w-[150px]  object-cover rounded-md"
          src={data.imgList[0].url}
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-between flex-1">
        <div>
          <h4 className="uppercase text-blue-700 font-bold hover:underline text-lg">
            {data.title}
          </h4>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            <span className="bg-green-200 text-green-800 font-semibold px-2 py-1 rounded">
              {data.monney} triệu/tháng
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded">
              {data.acreage} m²
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded">
              {data.district}, {data.province}
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded">
              {countDay} ngày
            </span>
          </div>
          <p className="leading-tight text-gray-700">
            {truncatedDescription.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center space-x-2">
            <img
              className="w-[35px] h-[35px] object-cover rounded-full"
              src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/08/05/z5700891578770-a45ef51685d48cf0a41f8f020ceacbc4_1722840941.jpg"
              alt=""
            />
            <span className="font-semibold text-gray-600">
              {data.userCreated}
            </span>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 md:text-xs text-white text-sm py-1 px-3 rounded-lg hover:bg-blue-700 transition">
              Gọi {data.phone}
            </button>
            <button className="border border-blue-600 md:text-xs text-blue-600 text-sm py-1 px-3 rounded-lg hover:bg-blue-100 transition">
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
