import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import addImg from "../../asset/addImg.png";
import UploadImage from "../../middleware/UploadImage";
import toast from "react-hot-toast";
import {useParams} from "react-router-dom"
import { useNavigate} from "react-router-dom";
const Createpost = ({userData,update}) => {
  const user = useSelector((state) => state.user.user);
  const {postID} = useParams()
  const navigation= useNavigate()
  const [allCategory, setAllCategory] = useState([]);
  const [allImageUploaded, setAllImageUploaded] = useState(userData ? userData.imgList :[]);
  const [allProvince, setAllProvince] = useState([]);
  const [allDistrict, setAllDistrict] = useState([]);
  const [allWard, setAllWard] = useState([]);
  const [codeProvince, setCodeProvince] = useState("");
  const [codeDistrict, setCodeDistrict] = useState("");
  const [address, setAddress] = useState(userData ? userData : {
    province: "",
    district: "",
    ward: "",
    street: "",
    category: "",
    title: "",
    description: "",
    monney: "",
    acreage: "",
    userCreated: user.name,
    phone: user.phone,
    
  });
  console.log(address.district);
  useEffect(() => {
    const getAllCategory = async () => {
      const url = "/api/category/get-all-category";
      try {
        const response = await axios({
          method: "GET",
          url: url,
          withCredentials: true,
        });
        if (response.data.allCategory) {
          setAllCategory(response.data.allCategory);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllCategory();
  }, []);
  const handleOnchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };
  console.log(address);
  useEffect(() => {
    const callProvince = async () => {
      try {
        const getProvince = await axios({
          url: "https://provinces.open-api.vn/api/p",
          method: "GET",
        });
        if (getProvince.data) {
          setAllProvince(getProvince.data);
          
        }
        
      } catch (err) {
        console.log(err.message);
      }
    };
    callProvince();
  }, []);
  useEffect(() => {
    if (address.province && allProvince.length > 0) {
      const selectedProvince = allProvince.find(
        (province) => province.name === address.province
      );
      setCodeProvince(selectedProvince?.code || "");
    }
  }, [address.province, allProvince]);
  useEffect(() => {
    if (address.district && allDistrict.length > 0) {
      const selectedDistrict = allDistrict.find(
        (district) => district.name === address.district
      );
      setCodeDistrict(selectedDistrict?.code || "");
    }
  }, [address.district, allDistrict]);
  useEffect(() => {
    const callDistrict = async () => {
      try {
        const getDistrict = await axios({
          url: `https://provinces.open-api.vn/api/p/${codeProvince}?depth=2`,
          method: "GET",
        });
        if (getDistrict.data.districts) {
          setAllDistrict(getDistrict.data.districts);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    if (codeProvince) {
      callDistrict();
    }
  }, [codeProvince]);
  useEffect(() => {
    const callWard = async () => {
      try {
        const getWard = await axios({
          url: `https://provinces.open-api.vn/api/d/${codeDistrict}?depth=2`,
          method: "GET",
        });
        if (getWard.data.wards) {
          setAllWard(getWard.data.wards);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    if (codeDistrict) {
      callWard();
    }
  }, [codeDistrict]);
  
  const handleUploadImage = async (e) => {
    if (allImageUploaded.length === 5) {
      toast.error("Can upload 5 images");
    } else {
      try {
        const img = e.target.files[0];
        const uploadImg = await UploadImage(img);

        if (uploadImg) {
          setAllImageUploaded((prev) => [...prev, uploadImg]);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };
  const handleDeleteImage = async (imgId) => {
    setAllImageUploaded((prev) => prev.filter((img) => img.asset_id !== imgId));
  };
  const handleSubmit = async () => {
    if (
      !address.province ||
      !address.district ||
      !address.ward ||
      !address.street ||
      !address.category ||
      !address.title ||
      !address.description ||
      !address.monney ||
      !address.acreage||
      allImageUploaded.length === 0
    ) {
      toast.error("Missing input");
      return;
    }
    
    const newAddress = {...address, imgList: allImageUploaded };
    try {
      
      const response = await axios( {
        url:  update ? `/api/room/update-room/${postID}` : "/api/room/create-room",
        method: update ? "PUT" :"POST",
        data: newAddress,
        withCredentials: true,
      });
      if (response.data.success) {
        update ? toast.success("Room updated successfully") : toast.success("Room created successfully");
        navigation("/admin/manager-post")
      }else{
        toast.error("Cant up")
        return
      }
    } catch (err) {
      
      toast.error(err.message);
    }
  };
  return (
    <div className="w-full flex flex-col p-3 space-y-3 ">
      <h1 className="text-3xl font-bold border-b-2 border-black-1 pb-2">
        Đăng tin mới
      </h1>

      <div className="flex space-x-3">
        <div className="w-full space-y-4 ">
          <div className="w-full space-y-4">
            <h2 className="text-xl text-slate-900 font-bold border-b-2 w-fit">
              Địa chỉ cho thuê
            </h2>
            <div className="flex justify-start h-fit gap-3 flex-wrap">
              <div className="flex h-fit flex-col space-y-2">
                <span className="text-md font-bold">Tỉnh/Thành phố</span>
                <select
                  onChange={(e) => {
                    handleOnchange(e);
                    const selectedProvince = allProvince.find(
                      (item) => item.name === e.target.value
                    );
                    if (selectedProvince) {
                      setCodeProvince(selectedProvince.code);
                    }
                  }}
                  value={address.province}
                  name="province"
                  id=""
                  className="border border-gray-400 p-1"
                >
                  <option value="default">--Chọn Tỉnh/TP--</option>
                  {allProvince?.map((item, key) => (
                    <option key={item.code} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex h-fit flex-col space-y-2">
                <span className="text-md font-bold">Quận/Huyện</span>
                <select
                  onChange={(e) => {
                    handleOnchange(e);
                    const selectedDistrict = allDistrict.find(
                      (item) => item.name === e.target.value
                    );
                    if (selectedDistrict) {
                      setCodeDistrict(selectedDistrict.code);
                    }
                  }}
                  value={address.district}
                  name="district"
                  id=""
                  className="border border-gray-400 p-1"
                >
                  <option value="default">--Chọn Quận/Huyện--</option>
                  
                  {
                    allDistrict?.map((item, key) => (
                      <option key={item.code} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex h-fit flex-col space-y-2">
                <span className="text-md font-bold">Phường/Xã</span>
                <select
                  onChange={handleOnchange}
                  value={address.ward}
                  name="ward"
                  id=""
                  className="border border-gray-400 p-1"
                >
                  <option value="default">--Phường/Xã--</option>
                  {
                    allWard?.map((item, key) => (
                      <option key={item.code} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex h-fit flex-col space-y-2">
                <span className="text-md font-bold">Địa chỉ cụ thể</span>
                <input
                  type="text"
                  value={address.street}
                  onChange={handleOnchange}
                  required
                  name="street"
                  className="border border-gray-400 p-1"
                  placeholder="Địa chỉ cụ thể"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-slate-900 font-bold border-b-2 w-fit">
              Thông tin mô tả
            </h2>
            <div className="flex flex-col justify-start h-fit gap-3">
              <span className="text-md font-bold">Loại chuyên mục</span>
              <select
                name="category"
                onChange={handleOnchange}
                value={address.category}
                id=""
                className="border border-gray-400 p-1"
              >
                <option value="default">--Chọn loại chuyên mục--</option>
                {allCategory?.length > 0 &&
                  allCategory.map((item, key) => (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <div className="flex flex-col space-y-3">
                <span className="text-md font-bold">Tiêu đề</span>
                <input
                  type="text"
                  onChange={handleOnchange}
                  name="title"
                  value={address.title}
                  className="border border-gray-400 p-1"
                  placeholder="Nhập tiêu đề"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-md font-bold">Nội dung mô tả</span>
                <textarea
                  rows="10"
                  onChange={handleOnchange}
                  name="description"
                  value={address.description}
                  className="border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-md font-bold">Thông tin liên hệ</span>
                <p className="border border-gray-400 p-1">{user.name}</p>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-md font-bold">Điện thoại</span>
                <p className="border border-gray-400 p-1">{user.phone}</p>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-md font-bold">Giá cho thuê</span>
                <input
                  type="number"
                  name="monney"
                  onChange={handleOnchange}
                  value={address.monney}
                  className="border border-gray-400 p-1"
                  placeholder="đơn vị Đồng"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-md font-bold">Diện tích</span>
                <input
                  name="acreage"
                  value={address.acreage}
                  onChange={handleOnchange}
                  type="number"
                  className="border border-gray-400 p-1"
                  placeholder="đơn vị m^2"
                />
              </div>
            </div>
            <div className=" space-y-4">
              <h2 className="text-xl text-slate-900 font-bold border-b-2 w-fit">
                Hình ảnh
              </h2>
              <p>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</p>
              <span className="block w-full h-[100px] flex cursor-pointer justify-center items-center border border-gray-400 p-1 relative">
                <input
                  type="file"
                  onChange={handleUploadImage}
                  className="w-full z-20 opacity-0 h-full"
                  accept=".jpg, .png"
                />
                <span className="absolute text-center">
                  <img src={addImg} className=" w-[50px]" alt="" />
                  Add images
                </span>
              </span>
              <div className="w-full flex flex-wrap">
                {allImageUploaded?.map((item, index) => (
                  <img
                    key={index}
                    className="w-1/5 object-contain hover:opacity-50 h-[150px]"
                    src={item.url}
                    alt={`uploaded-${index}`}
                    onClick={() => {
                      handleDeleteImage(item.asset_id);
                    }}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-3 text-center bg-green-700 text-white text-xl font-bold"
            >
              Gửi
            </button>
          </div>
        </div>

        <div className="w-1/3 ">
          <div className=" bg-yellow-100 p-3">
            <h2 className="text-xl">Lưu ý khi đăng tin </h2>
            <ul className="list-disc pl-5">
              <li>Nội dung phải viết bằng tiếng Việt có dấu</li>
              <li>Tiêu đề tin không dài quá 100 kí tự</li>
              <li>
                Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy
                sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới
                đúng vị trí của tin rao.
              </li>
              <li>
                Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so
                với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh
                chóng!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
