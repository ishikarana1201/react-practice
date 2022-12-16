import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Gallary from "./components/Gallary";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
