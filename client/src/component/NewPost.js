import React, { useEffect, useState } from "react";
import axios from "axios";

const NewPost = () => {
  const [newPost, setNewPost] = useState([]);

  useEffect(() => {
    const getNewPost = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_BACKEND}/api/room/new-post`,
          withCredentials: true,
        });
        if (response.data.success) {
          setNewPost(response.data.newPost);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getNewPost();
  }, []);

  return (
    <div>
      <div className="border border-gray-400 space-y-2 rounded-md p-3">
        <h5 className="text-lg font-bold">Tin mới đăng</h5>
        {newPost?.map((post) => (
          <div
            key={post._id}
            className="w-full flex items-center space-x-2 justify-between border-t-2 py-2 hover:cursor-pointer"
          >
            <img
              className="h-[50px] md:h-[60px] object-cover rounded-md"
              src={post.imgList[0].url}
              alt=""
            />
            <div className="flex-1">
              <h6 className="uppercase text-xs sm:text-sm text-blue-700 font-semibold">
                {post.title}
              </h6>
              <div className="flex justify-between items-center">
                <span className="font-bold text-green-700">
                  {post.monney} triệu/tháng
                </span>
                <span className="font-semibold text-sm text-gray-400">
                  {Math.abs(
                    Math.floor(
                      (new Date(post.createdAt) - new Date()) /
                        (1000 * 60 * 60 * 24)
                    )
                  )}{" "}
                  ngày
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPost;
