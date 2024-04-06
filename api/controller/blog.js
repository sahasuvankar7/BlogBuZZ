const model = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const secret = "adfj3k3r383j389jdsfjj383";

const User = model.User;

exports.createAccount = async (req, res) => {
  const { name, email, password } = req.body;
  const myPlaintextPassword = password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);

  try {
    const newuser = new User({ name, email, password: hash });
    await newuser
      .save()
      .then(() => console.log("successfully logged in"))
      .catch((err) => console.error("something went wrong"));

    res.status(201).json({ message: "succesfully" });
  } catch (err) {
    console.err(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// login

exports.retrieveAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    // finding user
    const user = await User.findOne({ email: email });

    // if user is valid
    if (user) {
      const passOk = await bcrypt.compare(password, user.password);

      // if the password is correct
      if (passOk) {
        // jwt pattern follow this link : https://www.npmjs.com/package/jsonwebtoken
        jwt.sign({ email, id: user._id }, secret, {}, (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json("ok");
        });
        // res.status(201).json({"userid":user._id});
      } else {
        res.status(401).json({ message: "invalid password or email" });
      }
    } else {
      res.status(404).json({ message: "account not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "internal server error" });
  }
};
