import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useNavigate} from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const navigate  = useNavigate();
  const toast = useToast();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleSubmit = async (e) => {
    // Handle form submission logic here

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    formData.append("file", file);
    // console.log(file)
    e.preventDefault();

    const tokenData = localStorage.getItem("jwtToken");

    if(tokenData){
      try {
        const res = await axios.post(
          "http://localhost:8080/api/create",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
  
        if(res.status === 200){
          navigate('/');
          toast({
            title: "post Successfully created",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        }else{
          toast({
            title: "somthing went wrong",
            description: "Please Enter correct credentials",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "bottom-right",
          });
        }
        console.log(res.data);
      } catch (err) {
        console.log("Error", err);
      }
    }else{
      toast({
        title: "Oops! you are not logged in",
        description: "Please Enter correct credentials",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="max-w-screen-sm mx-auto px-4 mt-10 mb-28">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>
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
              modules={modules}
              formats={formats}
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
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold px-4 py-3 rounded-lg hover:bg-primary-700 focus:outline-none focus:bg-primary-700"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
