import React from 'react'

const SearchItem = ({firstIcon, backIcon}) => {
  return (
    <div className="w-full">
      <div className="w-full bg-white py-1 px-2 rounded-lg">
        {firstIcon}
        <h2>this is text</h2>
        {backIcon}
      </div>

    </div>
  )
}

export default SearchItem
