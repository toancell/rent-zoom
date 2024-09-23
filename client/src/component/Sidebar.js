import React from 'react'
import FilterMonney from './FilterMonney'
import FilterAcreage from './FilterAcreage'
import NewPost from './NewPost'
const Sidebar = () => {
  return (
    <div className="w-1/3 space-y-3 ">
      {/* <FilterMonney />
      <FilterAcreage /> */}
      <NewPost />
    </div>
  )
}

export default Sidebar
