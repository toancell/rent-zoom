import React from 'react'
import Createpost from './Createpost'
import { useSelector } from 'react-redux'
const UpdatePost = () => {
  const data= useSelector((state) => state.post)
  console.log(data)
  return (
    <div >
      <Createpost userData={data} update={true} />
    </div>
  )
}

export default UpdatePost
