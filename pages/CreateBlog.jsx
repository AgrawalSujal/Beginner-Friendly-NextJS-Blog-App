import React, { useState } from "react";
import Navbar from "./Navbar";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const initialBlogs =
    typeof window !== "undefined" && localStorage.getItem("blogs");
  const [data, setData] = useState(
    initialBlogs ? JSON.parse(initialBlogs) : []
  );
  const addData = () => {
    const currentDate = new Date().toLocaleDateString;
    const newBlog = {
      id: data.length + 1,
      title,
      author,
      description,
      imageUrl,
      date: currentDate,
    };
    const updatedData = [...data, newBlog];
    setData(updatedData);
    localStorage.setItem("blogs", JSON.stringify(updatedData));
  };
  return (
    <div>
      <Navbar />
      <div className="container bg-light" style={{ marginTop: "5rem" }}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <button onClick={addData} className="btn btn-primary mb-2">
              Add Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
