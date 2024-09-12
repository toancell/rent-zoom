import React from "react";

const Item = () => {
  return (
    <div className=" flex space-x-4 border-t-2 border-blue-300 py-3">
      <div className="w-1/4">
        <img
          className="w-full object-cover rounded-md"
          src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/08/05/z5700891578770-a45ef51685d48cf0a41f8f020ceacbc4_1722840941.jpg"
          alt=""
        />
      </div>
      <div className="w-3/4">
        <div className="space-y-2">
          <h4 className="uppercase text-red-700 font-bold hover:underline md:text-md">
            Cho thue phong tro day du noi that, duong 3/2, khu ky hoa, quan 10
          </h4>
          <div className="flex justify-between ">
            <a className="text-green-800 font-semibold text-sm md:text-md">
              7.5 trieu/thang
            </a>
            <a className="text-sm md:text-md">70 m^2</a>
            <a className="text-sm md:text-md">Quan 7, Ho Chi Minh</a>
            <a className="text-sm md:text-md">5 ngay truoc</a>
          </div>
          <p className="leading-tight">
            Nhà nguyên căn cho thuê giá 7,5 triệu/ tháng + Kết cấu: 1 trệt + 1
            lầu gồm 3 phòng ngủ , 1 phòng khách + bếp , 1 sân vườn để được nhiều
            xe honda, máy
          </p>
          <div className="flex justify-between items-center">
            <div className="flex justify-center space-x-2 items-center">
              <img
                className="w-[30px] h-[30px] object-cover rounded-full"
                src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/08/05/z5700891578770-a45ef51685d48cf0a41f8f020ceacbc4_1722840941.jpg"
                alt=""
              />
              <span className="font-somibold text-gray-500">bao Ngoc</span>
            </div>
            <div className="flex space-x-2">
              <span className="bg-blue-700 text-white text-md py-1 px-3 rounded-lg">
                Gọi 0906464543
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
