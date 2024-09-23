import React from "react";
import Search from "../component/Search";
import { useSelector } from "react-redux";
import PageTitle from "./PageTitle";
import Result from "../component/Result";
import Sidebar from "../component/Sidebar";
import Advertisement from "../component/Advertisement";
import { useParams } from "react-router-dom";
import { useState } from "react";
const SinglePage = () => {
  const categoryData = useSelector((state) => state.category);
  console.log(categoryData);
  
  return (
    <div className="w-full flex justify-center mt-3 items-center">
      <div className="w-full sm:w-full space-y-5 lg:w-[80%]">
        <Search />
        <PageTitle data={categoryData} />
        <div className="flex space-x-4">
          <Result />
          <Sidebar />
        </div>
        <Advertisement />
      </div>
    </div>
  );
};

export default SinglePage;
