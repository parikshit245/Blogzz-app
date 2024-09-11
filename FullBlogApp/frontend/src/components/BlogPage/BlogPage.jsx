import axios from "axios";
import React from "react";
import './css/BlogPage.css'
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogPage = () => {
  const [Blogs, setBlogs] = useState(); // Initialize with null
  const { id } = useParams(); 

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/add/getBlog/${id}`);
        setBlogs(response.data.msg);
        console.log(Blogs._id);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <div className="page container">
      <div className="my-3">
        {Blogs && Blogs._id && (
          <Link to={`/updateBlog/${Blogs._id}`} className="d-flex justify-content-end edit">
            <FaEdit />
          </Link>
        )}
        {Blogs && (
          <>
            <h1 className="mt-2">{Blogs.title}</h1>
            <p className="blogPagePara mt-3">{Blogs.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
