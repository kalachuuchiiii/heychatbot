const router = require("express").Router(); 
const { createRequest } = require("../controllers/serviceController/openRouter/createRequest.js");
const { catchError } = require("../helpers/catchError.js");


router.post("/response", catchError(createRequest));

module.exports = router;