const model = require("../models/user");
const modelPost = require("../models/post");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const secret = "adfj3k3r383j389jdsfjj383";

const User = model.User;
const Post = modelPost.Post;



//REGISTER

exports.createAccount = async (req, res) => {
  const { name, email, password } = req.body;
  const myPlaintextPassword = password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);

  try {
    const newuser = new User({ name, email, password: hash });
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      res.status(200).json({ message: "account already created" });
    } else {
      await newuser
        .save()
        .then(() => console.log("successfully logged in"))
        .catch((err) => console.error("something went wrong"));

      res.status(201).json({ message: "succesfully" });
    }
  } catch (err) {
    console.err(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// LOGIN

exports.retrieveAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    // finding user
    const user = await User.findOne({ email: email });
    // if user is valid
    if (!user) {
      return res.status(404).json("user not found");
    }
    const passOk = await bcrypt.compare(req.body.password, user.password);
    // if the password is correct
    if (!passOk) {
      return res.status(401).json("invalid credentials");
    }
    // jwt pattern follow this link : https://www.npmjs.com/package/jsonwebtoken
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      secret
    );

    res
      .cookie("jwttoken", token, {
        httpOnly: true,
        // secure: true,
        // sameSite: "none",
      })
      .status(200)
      .json({
        token: token,
        name: user.name,
        User_Email: user.email,
        message: "ok",
      });

    // res.cookie("jwtToken", token).status(200).json(info);
    // console.log(res.cookies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// LOGOUT
exports.userLogout = async (req, res) => {
  try {
    res
      .clearCookie("jwtToken", { sameSite: "none", secure: true })
      .status(200)
      .send("user logout successfully");
  } catch {
    res.status(500).json(err);
  }
};

// Fetching DATA
exports.refetch = (req, res) => {
  const token = req.query.token;
  console.log(token);
  if (token) {
    jwt.verify(token, secret, (err, data) => {
      if (err) {
        res.status(403).json(err);
      }
      res.status(200).json(data);
    });
  } else {
    res.status(400).json({ message: "needs to login first" });
  }
};

// // creating new post
exports.createPost = async (req, res) => {
 

  const {path} = req.file;
  console.log(path)
  const lastSeparatorIndex = path.lastIndexOf('\\') !== -1 ? path.lastIndexOf('\\') : path.lastIndexOf('/');
  const newPath = path.slice(lastSeparatorIndex + 1);
 console.log(newPath)
  // creating post
  const { title, summary, content} = req.body;
 const postDoc = await Post.create({
    title,
    summary,
    content,
    cover:newPath,
  });
  console.log(postDoc);
  res.status(200).json(postDoc);
};

// updating post

exports.updatePost = (req, res) => {
  res.status(200).json("hello");
};

// fetching the post

exports.fetchPost = async (req,res)=>{
  res.json(await Post.find());
}
