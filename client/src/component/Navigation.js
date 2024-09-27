import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategory } from "../slice/categorySlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const [allCategory, setAllCategory] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className={`fixed top-16 left-0 w-full z-1 bg-slate-200 h-10 flex justify-center items-center ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="text-black h-10 px-3 flex items-center justify-center hover:bg-slate-500 cursor-pointer">
        <NavLink onClick={() => handleClick()} to={""}>
          Trang Chủ
        </NavLink>
      </div>

      {allCategory?.length > 0 &&
        allCategory.map((category) => (
          <div
            key={category._id}
            className="text-black h-10 px-3 flex items-center justify-center hover:bg-slate-500 cursor-pointer"
          >
            <NavLink
              to={category.slug}
              className={({ isActive }) =>
                isActive ? "text-blue-900 font-bold" : ""
              }
              onClick={() => handleClick(category)}
            >
              {category.name}
            </NavLink>
          </div>
        ))}
    </div>
  );
};

export default Navigation;
