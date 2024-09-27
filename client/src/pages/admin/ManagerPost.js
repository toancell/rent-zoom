import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../slice/postSlice";

const ManagerPost = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [allPost, setAllPost] = useState([]);
  const [searchList, setSearchList] = useState([]);
  console.log("user", user);
  useEffect(() => {
    const getAllRoom = async () => {
      try {
        const response = await axios({
          url: "/api/room/get-room-posted-by-user",
          method: "POST",
          withCredentials: true,
          data: { userIdCreated: user._id },
        });
        if (response.data) {
          setAllPost(response.data.allRoom);
          setSearchList(response.data.allRoom);
        }
      } catch (err) {
        toast.error(err.message);
      }
    };
    getAllRoom();
  }, [user]);
  console.log(allPost);
  const handleOnChange = (e) => {
    const searchKey = e.target.value.toLowerCase();
    if (searchKey === "") {
      setSearchList(allPost);
    }
    const search = allPost.filter((item) =>
      item.title.toLowerCase().includes(searchKey)
    );
    if (search.length === 0) {
      setSearchList(allPost);
    } else {
      setSearchList(search);
    }
  };
  const handleDelete = async (postId) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/room/delete-room/${postId}`,
        withCredentials: true,
      });
      if (response.data) {
        setSearchList(response.data.newAllRoom);
        toast.success("Xóa thành công");
      }
    } catch (err) {
      console.log(err);
      toast.error("Oops! Không thể xóa ");
    }
  };
  const handleUpdate = (postId) => {
    navigation(`/admin/update-post/${postId}`);
  };
  return (
    <div className="py-2 px-6 space-y-5">
      <div className="flex justify-between items-center border-b-2 pb-4">
        <h2 className="font-bold text-xl">Quản lí tin đăng </h2>
        <div className="flex space-x-2 justify-center items-center relative">
          <input
            type="text"
            placeholder="Tìm kiếm theo tiêu đề bài viết"
            className="border w-[300px] border-gray-400 z-0 p-1 pr-8"
            onChange={handleOnChange}
          />
          <button className="absolute right-1">
            <CiSearch size={25} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <table className="border border-gray-300 w-full text-center border-collapse">
          <thead>
            <tr className="border border-gray-300">
              <th className="border border-gray-300">Tiêu đề</th>
              <th className="border border-gray-300">Ngày đăng</th>
              <th className="border border-gray-300">Ảnh đại diện</th>
              <th className="border border-gray-300">Giá</th>
              <th className="border border-gray-300"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {searchList.length > 0 ? (
              searchList.map((index) => (
                <tr className="border border-gray-300" key={index._id}>
                  <td className="border border-gray-300 max-w-xs ">
                    {index.title}
                  </td>
                  <td className="border border-gray-300 ">
                    {new Date(index.createdAt).toLocaleDateString("vi-VN", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </td>

                  <td className="border border-gray-300">
                    {" "}
                    <img
                      src={index.imgList[0]?.url}
                      className="w-[100px] object-cover mx-auto"
                      alt=""
                    />
                  </td>
                  <td className="border border-gray-300">{index.monney}</td>
                  <td className="border border-gray-300 w-20">
                    <button
                      onClick={() => {
                        handleUpdate(index._id);
                        dispatch(setPost(index));
                      }}
                      className="py-0.5 px-1 text-xs bg-green-900 rounded-lg text-white"
                    >
                      Update
                    </button>

                    <button
                      className="py-0.5 px-1 text-xs bg-red-900 rounded-lg text-white"
                      onClick={() => {
                        handleDelete(index._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <td colSpan={"4"} className="text-center">
                Bạn chưa có bài đăng nào
              </td>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerPost;
