import { User } from "../models/user.models.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import path from "path";
const verifyEmail = asyncHandler(async (req, res) => {
  try {
    const { token } = req.query;
    console.log("token", token);

    let user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      throw new apiError(400, "Invlid Token");
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();
    console.log("user", user);
    return res
      .sendFile(path.resolve("./public/index.html"))
      .json(new apiResponse(200, "user verification successful"));
  } catch (error) {
    throw new apiError(500, "Some thing went wrong while verfing token");
  }
});

export { verifyEmail };
