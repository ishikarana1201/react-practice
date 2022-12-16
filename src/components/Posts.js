import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const baseURL = "https://jsonplaceholder.typicode.com/posts";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(baseURL);
      const post = await response.json();
      setPosts(post);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const result = posts.filter((post) => {
      return id !== post.id;
    });
    toast.error("Your post has successfully deleted!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setPosts(result);
  };
  // console.log(posts);
  return (
    <div id="posts">
      <h1 className="image-title">All Posts</h1>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <div className="half">
              <h1 className="text-dark">Posts</h1>
            </div>

            <div className="half">
              <Link to="/add-post" className="modalbtn btn btn-primary">
                Add Post
              </Link>
            </div>
          </div>
          <hr />
          {/* Table to display posts */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">sr.No.</th>
                <th scope="col">TItle</th>
                <th scope="col">Description</th>
                <th scope="col">UserId</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.slice(0, 10).map((post) => {
                return (
                  <tr>
                    <th scope="row">{post.id}</th>
                    <td>{post.title.substring(0, 20)}...</td>
                    <td>{post.body.substring(0, 50)}...</td>
                    <td>{post.userId}</td>
                    <td>
                      <button
                        className="btn btn-danger m-2 post-btn"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/edit-post/${post.id}`}
                        className="btn btn-success post-btn"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Posts;
