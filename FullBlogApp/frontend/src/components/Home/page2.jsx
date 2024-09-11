import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './css/page2.css'
import axios from "axios";

const Page2 = () => {
  const [Blogs, setBlogs] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:1000/add/getRecentData")
          .then((res) => {

            setBlogs(res.data.msg);
          });
      } catch (error) {
        alert("Some error occured");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page container">
      {Blogs &&
        Blogs.map((item, i) => (
          <div>
            <Link className="link-front-page" to={`/BlogPage/${item._id}`}>
              <h1>{item.title}</h1>
            </Link>
            <p>{item.description.slice(0, 500)}...</p>
          </div>
        ))}
    </div>
  ); 
};

export default Page2;
