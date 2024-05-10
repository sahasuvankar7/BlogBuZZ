require("dotenv").config();
const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/blog", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connected");
}
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

exports.User = mongoose.model("User", userSchema);
