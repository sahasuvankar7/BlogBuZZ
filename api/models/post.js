require("dotenv").config();
const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  }

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

exports.Post = mongoose.model("Post", postSchema);
