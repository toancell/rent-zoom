import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InformationAboutRoom from "./InformationAboutRoom";
import RelatePost from "../component/RelatePost";
import NewPost from "../component/NewPost";
import CallUser from "../component/CallUser";
import Advertisement from "../component/Advertisement";
const DetailPost = () => {
  const { postID } = useParams();
  const [detailPost, setDetailPost] = useState(null);
  
  useEffect(() => {
    const getDetailPost = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_BACKEND}/api/room/detail-room/${postID}`,
          withCredentials: true,
        });
        if (response.data.success) {
          setDetailPost(response.data.roomData);
        }
      } catch (error) {
        console.error("Error fetching detail post:", error);
      }
    };
    if (postID) {
      getDetailPost();
    }
  }, [postID]);

  if (!detailPost) return <div>Loading...</div>;


  return (
    <div className="w-full flex flex-col space-y-10 justify-center mt-3 items-center">
      <div className="w-full sm:w-full flex justify-center  lg:w-[80%] gap-x-3">
        <div className="w-2/3 space-y-5">
          <InformationAboutRoom data={detailPost} />
          <RelatePost data={detailPost} />
        </div> 
        <div className="w-1/3 space-y-5 ">
          <CallUser data={detailPost} />
          <NewPost />
        </div>
      </div>
      <div>
        <Advertisement />
      </div>
    </div>
  );
};

export default DetailPost;
