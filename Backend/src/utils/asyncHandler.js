const asyncHandler = (fun) =>  async(req, res, next) => {
    try {
        await fun(req, res, next); 
    } catch (error) {
        res.status(500)
        .json({
            success: false, 
            message: error.message || "Internal Server Error",
        });
        next(error)
    }
};


export {asyncHandler}
 