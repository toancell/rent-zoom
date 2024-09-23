import React from 'react'

const PageTitle = ({data}) => {
    console.log(data)
    const capitalWord= (string) => {
        return string.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }
    const capitalString =(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
  return (
    <div className='flex flex-col items-start mt-3 w-full justify-center'>
        <h1 className='text-3xl font-bold'>{capitalWord(data?.category?.name || "Cho Thuê")}  Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2024</h1>
        <h2 className="text-sm text-gray-500">{capitalString(data?.category?.name || "Cho Thuê")} nguyên căn, nhà riêng: giá rẻ, chính chủ, đầy đủ tiện nghi. Tìm thuê nhà với nhiều mức giá khác nhau, đa dạng loại diện tích. Đăng tin cho thuê nhà nhanh, hiệu quả tại phongtro123.com</h2>
        <div className="flex flex-col w-full justify-center items-center">
            <h3 className='text-xl font-bold my-3'>Khu vực nổi bật</h3>
            <div className="flex w-[60%] space-x-4">
                <div className="flex-1 rounded-md hover:shadow-lg transition hover:text-blue-800 bg-slate-200">
                    <img className="h-[110px] w-full rounded-t-md object-cover" src="https://phongtro123.com/images/location_hcm.jpg" alt="Hồ Chí Minh" />
                    <span className='px-2 py-2 block font-bold'>Cho {data.keyword} Hồ Chí Minh</span>
                </div>
                <div className="flex-1 rounded-md hover:shadow-lg transition hover:text-blue-800 bg-slate-200">
                    <img className="h-[110px] w-full rounded-t-md object-cover" src="https://phongtro123.com/images/location_hcm.jpg" alt="Hồ Chí Minh" />
                    <span className='px-2 py-2 block font-bold'>Cho {data.keyword} Hồ Chí Minh</span>
                </div>
                <div className="flex-1 rounded-md hover:shadow-lg transition hover:text-blue-800 bg-slate-200">
                    <img className="h-[110px] w-full rounded-t-md object-cover" src="https://phongtro123.com/images/location_hcm.jpg" alt="Hồ Chí Minh" />
                    <span className='px-2 py-2 block font-bold'>Cho {data.keyword} Hồ Chí Minh</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageTitle
