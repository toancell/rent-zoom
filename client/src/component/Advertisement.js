import React from "react";
import { IoIosStar } from "react-icons/io";
const Advertisement = () => {
  return (
    <div className="w-full h-fit rounded-lg bg-slate-100 ">
      <div className="w-[80%] flex flex-col space-y-3 justify-center py-5  mx-auto items-center">
        <h3 className="font-bold text-lg">Tại sao lại chọn PhongTro123.com?</h3>
        <p className="text-center text-sm md:text-md">
          Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào
          là trang web đứng top google về các từ khóa: cho thuê phòng trọ, nhà
          trọ, thuê nhà nguyên căn, cho thuê căn hộ, tìm người ở ghép, cho thuê
          mặt bằng...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với
          nhiều khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn
        </p>
        <div className="flex justify-around w-full items-center">
          <div className="text-center">
            <p className="text-sm md:text-xl font-bold">116.988+</p>
            <p>Thành viên</p>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-xl font-bold">103.348+</p>
            <p>Tin đăng</p>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-xl font-bold">300.000+</p>
            <p>Lượt truy cập/tháng</p>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-xl font-bold">2.500.000+</p>
            <p>Lượt xem/tháng</p>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-lg">Chi phí thấp, hiệu quả tối đa</h4>
          <div className=" flex justify-center items-center space-x-3">
            <IoIosStar size={25} className="text-yellow-300"/>
            <IoIosStar size={25} className="text-yellow-300"/>
            <IoIosStar size={25} className="text-yellow-300" />
            <IoIosStar size={25} className="text-yellow-300"/>
            <IoIosStar size={25} className="text-yellow-300"/>
          </div>
        </div>
        <div className="text-center space-y-3 ">
          <p className="italic text-sm font-semibold">
            "Trước khi biết website phongtro123, mình phải tốn nhiều công sức và
            chi phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy,
            và đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết
            website phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu
            quả khá cao trong khi chi phí khá thấp, không còn tình trạng phòng
            trống kéo dài."
          </p>
          <p className="">Anh Khánh (chủ hệ thống phòng trọ tại Tp.HCM) </p>
        </div>
        <div className="text-center space-y-2">
          <p className="font-bold text-lg">Bạn đang có phòng trọ/ căn hộ cho thuê ?</p>
          <p>Không phải lo tìm người cho thuê, phòng trống kéo dài </p>
          <button className="py-2 px-4 text-white rounded-lg font-bold bg-red-500 ">Đăng tin ngay</button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
