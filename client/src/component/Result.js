import React, { useEffect } from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
const Result = () => {
  const search = useSelector((state) => state.search)
  console.log(search)
  const {province, monney, acreage } = search

  const [selectedButton, setSelectedButton] = useState(1);
  const listButton = [
    { id: 1, name: "Mặc định" },
    { id: 2, name: "Mới nhất" },
  ];

  
  const category = useSelector((state) => state?.category?.category?.name );
  
  console.log("category", category);
  const [allRoom, setAllRoom] = useState([]);
  const [listRoom, setListRoom] = useState([]);
  useEffect(() => {
    const getDataPost = async () => {
      try {
        const response = await axios({
          url: "/api/room/all-room",
          method: "POST",
          withCredentials: true,
          data: { category,province,monney,acreage },

        });
        if (response.data) {
          setAllRoom(response.data.allRoom);
          setListRoom(response.data.allRoom)
        }
      } catch (err) {
        console.log("err");
      }
    };
    getDataPost();
  }, [category,province,monney,acreage ]);

  const handleClick = (id) => {
    setSelectedButton(id);
    if(id===2){
      const sortedRoom = [...allRoom].sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
      setListRoom(sortedRoom)
    }else{
      setListRoom(allRoom)
    }
  };
  return (
    <div className="w-2/3 h-fit px-3 bg-slate-300 space-y-2 rounded-t-lg">
      <div className="py-2 space-y-3 ">
        <h3 className="text-lg font-bold">Tổng {listRoom.length} kết quả</h3>
        <div className="space-x-3">
          <span>Sắp xếp: </span>
          {listButton.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`bg-slate-100 py-1 px-2 rounded-md transition-transform hover:bg-blue-200 ${
                selectedButton === item.id ? "underline bg-blue-300" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full h-auto">
        {listRoom?.map((room) => (
          <Item key={room._id} data={room} />
        ))}
      </div>
    </div>
  );
};

export default Result;
