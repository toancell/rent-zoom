import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategory } from "../slice/categorySlice";

const Navigation = () => {
  const dispatch = useDispatch()
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    const getAllCategory = async () => {
      const url = "/api/category/get-all-category";
      try {
        const response = await axios({
          method: "GET",
          url: url,
          withCredentials: true,
        });
        if (response.data.allCategory) {
          setAllCategory(response.data.allCategory);

        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllCategory();
  }, []);
  const handleClick =(category) =>{
      dispatch(setCategory(category))
  }
  return (
    <div className="h-10 flex justify-center  items-center bg-slate-200">
      <div className="text-black h-10 px-3 flex items-center justify-center hover:bg-slate-500 cursor-pointer">
        <NavLink onClick={()=> handleClick()}  to={""}>Trang Chủ </NavLink>
      </div>
      
      {allCategory?.length > 0 &&
        allCategory.map((category) => (
          <div
            key={category._id}
            className="text-black h-10 px-3 flex items-center justify-center hover:bg-slate-500 cursor-pointer"
          >
            <NavLink to={category.slug} className={({ isActive }) => (isActive ? 'text-blue-900 font-bold' : '')}  onClick={()=> handleClick(category)} >{category.name}</NavLink>
          </div>
        ))}
    </div>
  );
};

export default Navigation;
