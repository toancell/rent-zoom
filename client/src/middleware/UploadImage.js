import axios from "axios";

const UploadImage = async (file) => {
  if(file.size > 5* 1024  * 1024 ) { throw new Error("Chỉ tải tệp dưới 5MB")}
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "room_rent");
    formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
    
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`,
      formData
    );
    
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; 
  }
}

export default UploadImage;
