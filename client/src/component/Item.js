import React from 'react'

const Item = () => {
  return (
    <div className=" flex space-x-4 border-t-2 border-blue-300 py-3">
      <div className="w-1/4">
        <img className="w-full object-cover rounded-md" src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/08/05/z5700891578770-a45ef51685d48cf0a41f8f020ceacbc4_1722840941.jpg" alt="" />
      </div>
      <div className="w-3/4">
        <div className='space-y-2'>
            <h4 className="uppercase text-blue-700 font-bold md:text-md">Cho thue phong tro day du noi that, duong 3/2, khu ky hoa, quan 10</h4>
            <div className="flex justify-between ">
                <a className='text-green-800 font-semibold'>7.5 trieu/thang</a>
                <a>70 m^2</a>
                <a>Quan 7, Ho Chi Minh</a>
                <a>5 ngay truoc</a>
            </div>
            <p className='leading-tight'>Nhà nguyên căn cho thuê giá 7,5 triệu/ tháng + Kết cấu: 1 trệt + 1 lầu gồm 3 phòng ngủ , 1 phòng khách + bếp , 1 sân vườn để được nhiều xe honda, máy</p>
            <div>
                <img src="" alt="" />
                <span>bao Ngoc</span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Item
