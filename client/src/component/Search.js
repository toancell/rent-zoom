import React from "react";
import SearchItem from "./SearchItem";
import { CiSearch } from "react-icons/ci";

import { FaDeleteLeft } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { SiScaleway } from "react-icons/si";
import { useSelector } from "react-redux";
import { useState } from "react";
const Search = () => {
  const searchInf = useSelector((state) => state.search);
  return (
    <div className="w-full rounded-lg  h-13 px-4 py-2 flex justify-center gap-3 items-center bg-yellow-500">
      <SearchItem
        className="flex-1"
        firstIcon={<CiLocationOn />}
        backIcon={<FaDeleteLeft />}
        text={searchInf?.province || "Toàn quốc"}
        scope={"province"}
      />
      <SearchItem
        className="flex-1"
        firstIcon={<CiDollar />}
        backIcon={<FaDeleteLeft />}
        text={
          searchInf?.monney.a
            ? searchInf?.monney?.b === Infinity
              ? `Trên ${searchInf?.monney.a} triệu`
              : `${searchInf?.monney.a} - ${searchInf?.monney.b} triệu`
            : "Chọn giá"
        }
        scope={"monney"}
      />

      <SearchItem
        className="flex-1"
        firstIcon={<SiScaleway />}
        backIcon={<FaDeleteLeft />}
        text={
          searchInf?.acreage.min
            ? searchInf.acreage.max === Infinity
              ? `Trên ${searchInf.acreage.min} m²`
              : `${searchInf?.acreage.min} - ${searchInf?.acreage.max} m²`
            : "Chọn diện tích"
        }
        scope={"acreage"}
      />

      <div className="bg-blue-600 gap-5 flex-2 w-full h-8 flex justify-center items-center rounded-lg  ">
        <CiSearch size={25} />
        <button className=" font-bold text-md text-white hover:cursor-pointer">
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default Search;
