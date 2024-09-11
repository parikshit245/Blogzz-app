import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/BlogCard.css";
const Blogs = () => {
  const [Blogs, setBlogs] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:1000/add/getData`);
        setBlogs(res.data.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        {Blogs &&
          Blogs.map((blog, i) => (
            <div className="col-lg-3 blog-card m-3 p-3">
              <Link to={`/BlogPage/${blog._id}`}>
                <h4>{blog.title}</h4>
              </Link>

              <p>{blog.description.slice(0, 400)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
