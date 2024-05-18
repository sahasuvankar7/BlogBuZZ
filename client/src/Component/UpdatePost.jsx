import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';

const UpdatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here

    try {
      const res = await axios.post("http://localhost:8080/api/update");
      console.log(res.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="max-w-screen-sm mx-auto px-4 mt-10 mb-28">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Update Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-600"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="summary"
              className="block text-gray-700 font-semibold mb-1"
            >
              Summary
            </label>
            <input
              type="text"
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-600"
              placeholder="Enter summary"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-gray-700 font-semibold mb-1"
            >
              Content
            </label>
            <ReactQuill
              value={content}
              onChange={(val) => setContent(val)}
              className="bg-white border rounded-lg focus:outline-none focus:border-primary-600"
              modules={{ toolbar: true }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold mb-1"
            >
              Upload Photo
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-primary-700 focus:outline-none focus:bg-primary-700"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
