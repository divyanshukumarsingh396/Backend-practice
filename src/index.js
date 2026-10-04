import mongoose from "mongoose";
import app from "./app.js";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/config.js";
import dotenv from "dotenv";

dotenv.config();
connectDB()

.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("ERROR:", error);
})




// import express from "express";
// const app = express();

// (async  () => {

//         try{
//             await mongoose.connect(`${process.env.MONGODB_URL}
//                 /${DB_NAME}`)
//                 app.on("error", (error) => {
//                     console.error("ERROR:", error)
//                     throw error
//                 })
//                 app.listen(process.env.PORT, () => {
//                     console.log(`Server is running on port ${process.env.PORT}`)
//                 })

//         }catch (error){
//             console.error("ERROR:", error)
//             throw error
//         }

// })()

