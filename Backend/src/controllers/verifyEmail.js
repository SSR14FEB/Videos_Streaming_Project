import { User } from "../models/user.models.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyEmail = asyncHandler(async(req, res) => {
  try {
    const {token} = req.query
    console.log("token",token)
    
    let user = await User.findOne({
      verifyToken: token,
      verifyTokeyExpiry: { $gt: Date.now() },
    });

    if (!user) {
      throw new apiError(400, "Invlid Token");
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokeyExpiry = undefined;
    await user.save();
    console.log(user)
    return res.status(200)
    .json(new apiResponse(200,"user verification successfull"))

  } catch (error) {
    throw new apiError(500, "Some thing went wrong while verfing token");
  }
});

export {verifyEmail}