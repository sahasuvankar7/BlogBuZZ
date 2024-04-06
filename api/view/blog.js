const express = require("express");
const blogController = require("../controller/blog");
const router = express.Router();

router.post("/register", blogController.createAccount);
router.post('/login', blogController.retrieveAccount);

exports.router = router
