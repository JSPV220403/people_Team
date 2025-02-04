const express = require("express");
const router = express.Router();
const validate= require("../validation/validation")
const validation= require("../middleware/validation.middleware")

const userController = require("../controller/userController");

router.post("/insert", validation.validateBody(validate.validateUser()),userController.Insert);
router.get("/", userController.findAll);
module.exports = router;
