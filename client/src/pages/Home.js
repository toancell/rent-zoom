import React from "react";
import { useSelector } from "react-redux";
import Search from "../component/Search";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className=" flex justify-center mt-3 items-center">
      <div className="w-[80%]">
        <Search />
      </div>
    </div>
  );
};

export default Home;
