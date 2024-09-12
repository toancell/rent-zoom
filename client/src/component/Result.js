import React, { useState } from "react";
import ListRoom from "./ListRoom";

const Result = () => {
  const [selectedButton, setSelectedButton] = useState(1); 
  const listButton = [
    { id: 1, name: "Mặc định" },
    { id: 2, name: "Mới nhất" },
    { id: 3, name: "Có Video" },
  ];

  const handleClick = (id) => {
    setSelectedButton(id);
  };

  return (
    <div className="w-2/3 h-fit px-3 bg-slate-300 space-y-2 rounded-t-lg">
      <div className="py-2 space-y-3 ">
        <h3 className="text-lg font-bold">Tổng 23.730 kết quả</h3>
        <div className="space-x-3">
          <span>Sắp xếp: </span>
          {listButton.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`bg-slate-100 py-1 px-2 rounded-md transition-transform hover:bg-blue-200 ${
                selectedButton === item.id ? "underline bg-blue-300" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <ListRoom />
    </div>
  );
};

export default Result;
