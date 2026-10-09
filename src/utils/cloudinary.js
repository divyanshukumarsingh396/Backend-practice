import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadCloudinary = async (filePath, folder) => {
    try {
        if (!filePath) return null;
        const response = await cloudinary.uploader.upload(filePath, 
            {
                RESOURCE_TYPE: "auto",
         })
  console.log("file uploaded to cloudinary",
    response.url);
  return response;
        
        }catch (error){
            fs.unlinkSync(filePath);
        }
    }

    export default uploadCloudinary;