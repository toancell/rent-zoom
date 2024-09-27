import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Item from './Item';
const RelatePost = ({data}) => {
    const{category,province,ward}= data
    const [relateList, setRelateList] = useState([])
    useEffect(()=>{
        const getRelatePost = async() =>{
            const response = await axios({
                url: `${process.env.REACT_APP_BACKEND}/api/room/relate-post`,
                method: "POST",
                data:{category , province, ward}
            }) 
            if(response.data.success) {
                setRelateList(response.data.relatePost)
            }
        }
        getRelatePost()
    },[category,province,ward])
  return (
    <div>
    <div className="border border-gray-400 space-y-2 rounded-md p-3">
      <h5 className="text-lg font-bold">Bài viết liên quan</h5>
      {relateList?.map((room) => (
          <Item key={room._id} data={room} />
        ))}
      
    </div>
  </div>
);
};


export default RelatePost
