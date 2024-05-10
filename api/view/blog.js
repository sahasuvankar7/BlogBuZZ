const express = require("express");
const blogController = require("../controller/blog");
const router = express.Router();
const cors = require("cors");

const cookieParser = require("cookie-parser");

router.use(express.json());

router.use(
  cors({
    origin: "http://localhost:5173", // specify the origin for CORS
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // specify the methods for CORS
    credentials: true, // this allows session cookies to be sent with requests
    optionsSuccessStatus: 200, // some legacy browsers choke on 204
  })
);
router.use(cookieParser());

router.post("/login", blogController.retrieveAccount);
router.post("/register", blogController.createAccount);
router.get("/profile", blogController.refetch);
router.get("/logout", blogController.userLogout);

exports.router = router;
