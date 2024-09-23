import React from "react";
import BoxSearch from "./BoxSearch";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../slice/searchSlice";
const SearchItem = ({ firstIcon, backIcon, text, scope }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const handleDelete = () => {
    switch (scope) {
      case "province":
        dispatch(setSearch({ province: "" }));
        break;
      case "monney":
        dispatch(setSearch({ monney: ""}));
        break;
      case "acreage":
        dispatch(setSearch({ acreage:"" })); 
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="w-full">
        <div
          
          className="w-full flex justify-between items-center bg-white py-2 px-2 rounded-lg"
        >
          <div className="flex gap-2 justify-center items-center" onClick={handleClick}>
            {firstIcon}
            <h2 className="text-sm">{text}</h2>
          </div>
          <span onClick={()=>{handleDelete(scope)}}>
          {backIcon}
          </span>
        </div>
      </div>
      {show && <div className="relative z-10 transition duration-300 ease-in-out">
          <BoxSearch scope={scope} onClose={handleClick} />
        </div>}
    </>
  );
};

export default SearchItem;
