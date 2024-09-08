import React from "react";
import Search from "../component/Search";
import { useSelector } from "react-redux";
import PageTitle from "./PageTitle";
import Result from "../component/Result";
const SinglePage = () => {
  const categoryData = useSelector((state) => state.category);
  console.log(categoryData);
  return (
    <div className="w-full flex justify-center mt-3 items-center">
      <div className="w-full sm:w-full lg:w-[80%]">
        <Search />
        <PageTitle data={categoryData} />
        <Result />
      </div>
    </div>
  );
};

export default SinglePage;
