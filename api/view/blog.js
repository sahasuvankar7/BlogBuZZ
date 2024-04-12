const express = require("express");
const blogController = require("../controller/blog");
const router = express.Router();


const cookieParser = require("cookie-parser");

router.use(express.json());
router.use(cookieParser());

router.post("/register", blogController.createAccount);
router.post('/login', blogController.retrieveAccount);
router.get('/profile', blogController.userProfile);

exports.router = router
