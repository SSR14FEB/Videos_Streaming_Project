import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { Videos } from "../models/video.models.js";
import { User } from "../models/user.models.js";

const Pages = asyncHandler(async (req, res,) => {
  const { page = 1, limit = 10, search = "" } = req.query;

  const aggregateQuery = Videos.aggregate([
    {
      $match: {
        title: {
          $regex: search,
          $options: "i",
        },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "owner",
        foreignField: "_id",
        as: "videoOwner",
      },
    },
    {
      $unwind: {
        path: "$videoOwner",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        userName: "$videoOwner.userName",
        avatar: "$videoOwner.avatar",
        videoFile: 1,
        thumbnail: 1,
        title: 1,
        duration: 1,
        description: 1,
        views: 1,
      },
    },
  ]);

  const option = {
    page: page || 2,
    limit: limit || 10,
  };

  const videoResult = await Videos.aggregatePaginate(aggregateQuery, option);

  if (!videoResult) {
    throw new apiError(404, "Videos not available");
  }

  return res
    .status(200) // Ensure a valid HTTP status code
    .json(new apiResponse(200, videoResult, "Paginated videos"));
});

export { Pages };
