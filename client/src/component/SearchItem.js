import React from "react";

const SearchItem = ({ firstIcon, backIcon }) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center bg-white py-2 px-2 rounded-lg">
        <div className="flex gap-2 justify-center items-center">
          {firstIcon}
          <h2 className="text-sm">this is text</h2>
        </div>
        {backIcon}
      </div>
    </div>
  );
};

export default SearchItem;
