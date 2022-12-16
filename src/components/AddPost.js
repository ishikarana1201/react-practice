import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, body);
    const result = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        title,
        body,
      }
    );
    console.log(result);
    navigate("/posts");
  };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <h1 className="p-2">Add Post</h1>
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
          Add Post
        </button>
      </form>
    </>
  );
};

export default AddPost;
