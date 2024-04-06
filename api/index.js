const express = require("express");
const app = express();
const PORT = 8080;
var cors = require("cors");
const blogRouter = require("./view/blog");

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api", blogRouter.router);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(PORT, (req, res) => {
  console.log("backend server connected");
});
