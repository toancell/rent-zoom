import axios from "axios";
const DeleteImage= async(idImage) =>{
   try{
    const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/destroy`,{
        
            public_id: idImage, 
            api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
            api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
          }
    )
    return response.data
   }catch(err){
    console.log(err);
   }
}
export default DeleteImage