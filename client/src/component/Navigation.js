import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Navigation = () => {
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

  return (
    <div className="h-10 flex justify-center items-center bg-slate-200">
      <div className="text-black h-10 px-3 flex items-center justify-center hover:bg-slate-500 cursor-pointer">
        <NavLink to={""}>Trang Chủ </NavLink>
      </div>

      {allCategory?.length > 0 &&
        allCategory.map((category) => (
          <div
            key={category._id}
            className="text-black h-10 px-3 flex items-center justify-center hover:bg-slate-500 cursor-pointer"
          >
            <NavLink to={category.slug}>{category.name}</NavLink>
          </div>
        ))}
    </div>
  );
};

export default Navigation;
