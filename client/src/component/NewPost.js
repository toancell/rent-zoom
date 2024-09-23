import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const NewPost = () => {
  const [newPost,setNewPost] = useState([])
  useEffect(()=>{
    const getNewPost= async()=>{
      try{
        const response = await axios({
          method: "GET",
          url: "api/room/new-post",
          withCredentials: true,
        })
        if(response.data.success){
          setNewPost(response.data.newPost)
        }
      }catch(err){
        console.log(err)
      }
    }
    getNewPost()
  },[])
  console.log(newPost)
  return (
    <div>
      <div className="border border-gray-400 space-y-2 rounded-md p-3">
      <h5 className="text-lg font-bold">Tin mới đăng</h5>
      <div className="w-full flex items-center justify-center space-x-3">
        <img className="h-[50px] md:h-[60px] object-cover rounded-md"  src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2019/02/25/63b548ae81a263fc3ab3_1551067966.jpg" alt="" />
        <div>
            <h6 className='uppercase text-xs sm:text-sm  text-blue-700 font-semibold'>Chính chủ cho thuê ! Cam Kết Phòng Y Như Hình</h6>
            <div className='flex justify-between justify-center'>
                <span className='font-bold text-green-700'>2.2 triệu/tháng</span>
                <span className="font-semibold text-sm text-gray-400">32 phút trước</span>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewPost
