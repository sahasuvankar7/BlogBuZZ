const express = require("express");
const blogController = require("../controller/blog");
const router = express.Router();
const cors = require("cors");

const cookieParser = require("cookie-parser");
const multer = require("multer");

//configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({storage:storage});

// router.use(bodyParser.urlencoded({ extended: true }));
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
router.use(express.static('uploads'));  

router.post("/login", blogController.retrieveAccount);
router.post("/register", blogController.createAccount);
router.get("/profile", blogController.refetch);
router.get("/logout", blogController.userLogout);
// router.post("/create",blogController.createPost);
router.post("/create", upload.single("file"), blogController.createPost);
router.post("/update", blogController.updatePost);
router.get('/post',blogController.fetchPost);
exports.router = router;
