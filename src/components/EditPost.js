import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const param = useParams();
  // console.log(param.id);
  const fetchData = async (e) => {
    console.log(title, body);
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${param.id}`
    );
    // console.log(result.data);
    setTitle(result.data.title);
    setBody(result.data.body);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, body);
    const result = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${param.id}`,
      {
        title,
        body,
      }
    );
    if (result) {
      toast("Your post has successfully updated!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/posts");
    } else {
      alert("Some error");
    }
    console.log(result);
  };
  return (
    <>
      <h1 className="p-2">Edit Post</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            className="form-control inputField"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control inputField"
            name="discription"
            placeholder="Enter body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <button
          className="btn btn-primary m-5 p-3"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Edit Post
        </button>
      </form>
      <ToastContainer position="top-center" />
    </>
  );
};

export default EditPost;
