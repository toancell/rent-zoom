import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
    const navigate = useNavigate()
    const {token} = useParams()
    const [data,setData] = useState({
        token:token,
        resetcode:"",
        newPassword: "",
    })
    const handleonChange=(e)=>{    
        e.preventDefault();
       const {name, value} = e.target
       setData( (prev) =>({
        ...prev,
        [name]: value 
       }))
        
    }
    console.log(data)
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const url ="/api/auth/forget-password"
        try{
            const response= await axios(url,{
                method:"POST",
                data:data,
                withCredentials:true
            }) 
           
            if(response) {
                toast.success("Cap nhat mat khau thanh cong")
                navigate("/login")
            }
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className="h-screen flex justify-center items-center">
      <form action="" className="w-1/2 p-6 rounded-lg shadow-lg bg-slate-100 space-y-3 ">
        <div>
          <label htmlFor="" className="block text-black mb-2 uppercase">
            Reset password code :
          </label>
          <input
            placeholder="Nhap o day"
            type="text"
            name="resetcode"
            value={data.resetcode}
            onChange={handleonChange}
            className="w-full p-2 rounded-md  font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="" className="block text-black mb-2 uppercase">
            New password :
          </label>
          <input
          onChange={handleonChange}
            placeholder="Nhap o day"
            name="newPassword"
            value={data.newPassword}
            type="password"
            className="w-full p-2 rounded-md  font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
            <button onClick={handleSubmit} className="w-full py-2 text-center rounded-lg bg-blue-600">Gửi</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
