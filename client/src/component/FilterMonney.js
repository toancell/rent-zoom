import React from "react";
import { MdNavigateNext } from "react-icons/md";
const FilterMonney = () => {
  const listFIlterMonney = [
    {
      id: 1,
      text: "Dưới 1 triệu",
    },
    {
      id: 2,
      text: "Từ 1 - 2 triệu",
    },
    {
      id: 3,
      text: "Từ 2 - 3 triệu",
    },
    {
      id: 4,
      text: "Từ 3 - 5 triệu",
    },
    {
      id: 5,
      text: "Từ 5 - 7 triệu",
    },
    {
      id: 6,
      text: "Từ 7 - 10 triệu",
    },
    {
      id: 7,
      text: "Từ 10 - 15 triệu",
    },
    {
      id: 8,
      text: "Trên 15 triệu",
    },
  ];
  return (
    <div className="border border-gray-400 rounded-md p-3">
      <h5 className="text-lg font-bold">Xem theo giá</h5>
      <div className="w-full flex flex-wrap items-center justify-start">
        {listFIlterMonney.map((item, key) => (
          <div key={item.id} className="w-1/2 flex justify-start space-x-2 py-1 hover:text-red-400 border-b-2 border-dashed border-gray-200 items-center">
            <MdNavigateNext /> <span className="text-sm md:text-md">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMonney;
