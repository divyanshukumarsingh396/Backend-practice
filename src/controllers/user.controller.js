import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {

// get user details from frontend
// validation not empty
// check if user already exists : USERNAME ,EMAIL
// check for images, check for avatar
// upload them to cloudinary - create in db
// create user object 
// remove password and  refreshToken field from response
// check for user creation 
//  return response with user details

const { fullName, email, password, username, avatar } = req.body;
 console.log("email", email);

})

export { registerUser };