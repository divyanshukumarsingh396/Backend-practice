const asyncHandler = (requestHandler) => {
           (req, res, next) => {
           promise.resolve(requestHandler(req, res, next)).
           catch((error) =>next(error))
           }
    }

export default asyncHandler;

// const asyncHandler = ()=> {}
// const asyncHandler = (fn) => ()=> {}
// const asyncHandler = (fn)=> async ()=>{}

    // const asyncHandler = (fn) => 
    //   async (req, res, next) => {
    //         try {
    //             await fn(req, res, next);
    //         } catch (error) {
    //          req.status(error.code || 500).json({
    //             success: false,
    //             message: error.message 
    //          })
    //         } 
    //      }






