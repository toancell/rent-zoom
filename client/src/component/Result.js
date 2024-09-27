import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import axios from "axios";

const Result = () => {
  const search = useSelector((state) => state.search);
  const { province, monney, acreage } = search;

  const [selectedButton, setSelectedButton] = useState(1);
  const listButton = [
    { id: 1, name: "Mặc định" },
    { id: 2, name: "Mới nhất" },
  ];

  const category = useSelector((state) => state?.category?.category?.name);
  const [allRoom, setAllRoom] = useState([]);
  const [listRoom, setListRoom] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 5; 


  useEffect(() => {
    const getDataPost = async () => {
      try {
        const response = await axios({
          url: "/api/room/all-room",
          method: "POST",
          withCredentials: true,
          data: { category, province, monney, acreage },
        });
        if (response.data) {
          setAllRoom(response.data.allRoom);
          setListRoom(response.data.allRoom);
        }
      } catch (err) {
        console.log("err");
      }
    };
    getDataPost();
  }, [category, province, monney, acreage]);

  const handleClick = (id) => {
    setSelectedButton(id);
    if (id === 2) {
      const sortedRoom = [...allRoom].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setListRoom(sortedRoom);
    } else {
      setListRoom(allRoom);
    }
    setCurrentPage(1); 
  };

  
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = listRoom.slice(indexOfFirstRoom, indexOfLastRoom);
  const totalPages = Math.ceil(listRoom.length / roomsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-2/3 h-fit bg-slate-300 space-y-2 rounded-t-lg">
      <div className="py-2 space-y-3 px-5 ">
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
        {currentRooms?.map((room) => (
          <Item key={room._id} data={room} />
        ))}
      </div>


      <div className="flex justify-center space-x-2 py-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-300 hover:bg-blue-400"}`}
        >
          Trước
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 rounded ${currentPage === number ? "bg-blue-500 text-white" : "bg-blue-300 hover:bg-blue-400"}`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-300 hover:bg-blue-400"}`}
        >
          Tiếp
        </button>
      </div>
    </div>
  );
};

export default Result;
