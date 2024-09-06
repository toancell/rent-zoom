import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const RequestForgetPassword = () => {
    const [email, setEmail] = useState()
    const navigate = useNavigate()
    const handleOnChange =(e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const url="/api/request-forget-password"
        try{    
            const response = await axios.post(url,{
              email
            })
            if(!response){
                toast.error("Something went wrong")
            }
           toast.success("Da gui mail thanh cong")
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-[50%] p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-black text-2xl font-bold mb-6">Lấy lại mật khẩu</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2 uppercase">
            Email :
          </label>
          <input
            type="text"
            value={email}
            id="email"
            className="w-full p-2 rounded-md bg-slate-300 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            onChange={handleOnChange}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-600 w-full text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Gửi
          </button>
        </div>

        
      </form>
    </div>
  )
}

export default RequestForgetPassword
