import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setSearch } from "../slice/searchSlice";

const monneyList = [
  { id: 1, a: 0, b: 1, label: "0 đến 1 triệu" },
  { id: 2, a: 1, b: 2, label: "1 đến 2 triệu" },
  { id: 3, a: 2, b: 3, label: "2 đến 3 triệu" },
  { id: 4, a: 3, b: 5, label: "3 đến 5 triệu" },
  { id: 5, a: 5, b: 7, label: "5 đến 7 triệu" },
  { id: 6, a: 7, b: 10, label: "7 đến 10 triệu" },
  { id: 7, a: 10, b: 20, label: "10 đến 20 triệu" },
  { id: 8, a: 20, b: Infinity, label: "Trên 20 triệu" }
];

const acreageList = [
  { id: 1, min: 0, max: 20, label: "Dưới 20 m²" },
  { id: 2, min: 20, max: 30, label: "Từ 20 m² - 30 m²" },
  { id: 3, min: 30, max: 50, label: "Từ 30 m² - 50 m²" },
  { id: 4, min: 50, max: 70, label: "Từ 50 m² - 70 m²" },
  { id: 5, min: 70, max: 90, label: "Từ 70 m² - 90 m²" },
  { id: 6, min: 90, max: Infinity, label: "Trên 90 m²" },
];

const BoxSearch = ({ onClose, scope }) => {
  const dispatch = useDispatch();
  const [allProvince, setAllProvince] = useState([]);

  useEffect(() => {
    if (scope === "province") {
      const callProvince = async () => {
        try {
          const getProvince = await axios({
            url: "https://provinces.open-api.vn/api/p",
            method: "GET",
          });
          if (getProvince.data) {
            setAllProvince(getProvince.data);
          }
        } catch (err) {
          console.log(err.message);
        }
      };
      callProvince();
    }
  }, [scope]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center z-20">
      <div className="bg-white h-[50%] overflow-y-auto w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold ">Tìm kiếm</h2>
          <button
            onClick={onClose}
            className=" bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Đóng
          </button>
        </div>
        <div className="mt-2 ">
          {scope === "province" &&
            allProvince.map((province) => (
              <div
                key={province.id}
                className="p-2 border-b"
                onClick={() => {
                  dispatch(setSearch({ province: province.name }));
                  onClose();
                }}
              >
                <input
                  type="radio"
                  id={province.id}
                  name="province"
                  value={province.name}
                />
                <label htmlFor={province.id} className="ml-2">
                  {province.name}
                </label>
              </div>
            ))}
          {scope === "monney" && (
            <div className="mt-4">
              <ul className="list-inside">
                {monneyList.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      dispatch(setSearch({ monney:{ a: item.a,b:item.b} }));
                      onClose();
                    }}
                    className="p-2 text-black border-b hover:cursor-pointer hover:bg-slate-500"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {scope === "acreage" && (
            <div className="mt-4">
              <ul className="list-inside">
                {acreageList.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      dispatch(setSearch({ acreage: {min: item.min,max: item.max} }));
                      onClose();
                    }}
                    className="p-2 text-black border-b hover:cursor-pointer hover:bg-slate-500"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoxSearch;
