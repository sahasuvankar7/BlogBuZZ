const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/blog", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://suvankarsaha084:SLKI9vT2UeUWlgry@cluster0.pcddywr.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  );
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
