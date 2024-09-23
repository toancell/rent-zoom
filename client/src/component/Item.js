import React from "react";
import { useState } from "react";
const Item = ({ data }) => {
  console.log(data);
  const startDate = new Date(data.createdAt);
  const currentDate = new Date();

  const time = currentDate - startDate;

  const countDay = Math.floor(time/ (1000 * 60 * 60 * 24)) + 1;
  return (
    <div className=" flex space-x-4 border-t-2 border-blue-300 py-3">
      <div className="w-1/4">
        <img
          className="w-full object-cover rounded-md"
          src={data.imgList[0].url}
          alt=""
        />
      </div>
      <div className="w-3/4">
        <div className="space-y-2">
          <h4 className="uppercase text-red-700 font-bold hover:underline md:text-md">
            {data.title}
          </h4>
          <div className="flex justify-between ">
            <a className="text-green-800 font-semibold text-sm md:text-md">
              {data.monney} trieu/thang
            </a>
            <a className="text-sm md:text-md">{data.acreage} m^2</a>
            <a className="text-sm md:text-md">
              {data.district} , {data.province}
            </a>
            <a className="text-sm md:text-md">{countDay} ngày</a>
          </div>
          <p className="leading-tight">{data.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex justify-center space-x-2 items-center">
              <img
                className="w-[30px] h-[30px] object-cover rounded-full"
                src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/08/05/z5700891578770-a45ef51685d48cf0a41f8f020ceacbc4_1722840941.jpg"
                alt=""
              />
              <span className="font-somibold text-gray-500">{data.userCreated}</span>
            </div>
            <div className="flex space-x-2">
              <span className="bg-blue-700 text-white text-md py-1 px-3 rounded-lg">
                Gọi {data.phone}
              </span>
              <span className="bg-white text-blue-700 border-blue-800 py-1 px-3 rounded-lg">
                Nhắn Zalo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
