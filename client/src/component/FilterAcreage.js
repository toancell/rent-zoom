import React from "react";
import { MdNavigateNext } from "react-icons/md";
const FilterAcreage = () => {
  const listFIlterAcreage = [
    {
      id: 1,
      text: "Dưới 20m2",
    },
    {
      id: 2,
      text: "Từ 20 - 30 m2",
    },
    {
      id: 3,
      text: "Từ 30 - 50 m2",
    },
    {
      id: 4,
      text: "Từ 50 - 70 m2",
    },
    {
      id: 5,
      text: "Từ 70 - 90 m2",
    },
    {
      id: 6,
      text: "Trên 99 m2",
    },
    
  ];
  return (
    <div className="border border-gray-400 rounded-md p-3">
      <h5 className="text-lg font-bold">Xem theo diện tích</h5>
      <div className="w-full flex flex-wrap items-center justify-start">
        {listFIlterAcreage.map((item, key) => (
          <div key={item.id} className="w-1/2 flex justify-start space-x-2 py-1 hover:text-red-400 border-b-2 border-dashed border-gray-200 items-center">
            <MdNavigateNext /> <span className="text-sm md:text-md">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterAcreage;
