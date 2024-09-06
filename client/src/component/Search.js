import React from 'react'
import SearchItem from './SearchItem'
import { CiSearch } from "react-icons/ci";
import { MdLocationCity } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { SiScaleway } from "react-icons/si";
const Search = () => {
  return (
    <div className="w-full rounded-lg h-12 px-4 py-2 flex justify-center gap-3 items-center bg-yellow-500">
        <SearchItem className="flex-1" firstIcon={MdLocationCity} backIcon={MdNavigateNext} />
        <SearchItem className="flex-1" firstIcon={CiLocationOn} backIcon={MdNavigateNext} />
        <SearchItem className="flex-1" firstIcon={CiDollar} backIcon={MdNavigateNext}/> 
        <SearchItem className="flex-1" firstIcon={SiScaleway} backIcon={MdNavigateNext}/>
        <div className="bg-blue-600 gap-5 flex-2 w-full h-8 flex justify-center items-center rounded-lg  ">
          <CiSearch size={25}/>
          <button className=' font-bold text-md text-white'>Tìm kiếm</button>
        </div>
    </div>
  )
}

export default Search
