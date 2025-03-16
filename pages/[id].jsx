import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
const BlogDetail = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const router = useRouter();
  const { blogId } = router.query;
  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    const blog = blogs.find((b) => b.id == parseInt(blogId));
    setBlogDetails(blog);
  }, [blogId]);
  if (!blogDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container bg-light" style={{ marginTop: "5rem" }}>
      <Navbar />
      <div className="card mt-5">
        <img
          src={blogDetails.imageUrl}
          style={{
            maxWidth: "100%",
            maxHeight: "300px",
          }}
          className="card-img-top"
          alt="Blog"
        />
        <div className="card-body">
          <h1 className="card-title">{blogDetails.title}</h1>
          <p className="card-text">{blogDetails.description}</p>
          <p className="card-text">Author: {blogDetails.author}</p>
          <p className="card-text">Date: {blogDetails.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
