exports.catchError = (fn) => {
  return async (req, res, next) => {
    try{
      await fn(req, res, next);
    }catch(e){
      return res.status(500).json({
        success: false, 
        message: e.message
      })
    }
  }
}