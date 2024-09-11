import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/WriteAndUpdate.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const WriteAndUpdate = ({ titleName }) => {
  const history = useNavigate()
  const [Blogs, setBlogs] = useState({ title: "", description: "" }); // Initialize with null
  const { id } = useParams();
  const change = (e) => {
    const { name, value } = e.target;
    setBlogs({ ...Blogs, [name]: value });
  };
  const submit = async () => {
    if(titleName === "Write"){
      await axios.post("http://localhost:1000/add/post", Blogs).then((res) => {
        alert(res.data.msg);
      });
      console.log(Blogs);
      setBlogs({ title: "", description: "" });
    }else{
      await axios.put(`http://localhost:1000/add/updateBlog/${id}`, Blogs).then((res) => {
        alert(res.data.msg);
        history(`/BlogPage/${id}`)
      });

    }

  };


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
    <div className="container">
      <h3>{titleName} Blogs</h3>
      <div className="d-flex flex-column my-4">
        <input
          className="form-text p-3"
          type="text"
          name="title"
          value={Blogs.title}
          placeholder="Title"
          onChange={change}
        />
        <textarea
          className="form-text p-3"
          name="description"
          id=""
          cols="30"
          rows="5"
          value={Blogs.description}
          placeholder="Description"
          onChange={change}
        ></textarea>
        <div className="mt-4 ">
          <button className="px-4 py-2 add-form-btn" onClick={submit}>
            {titleName} Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteAndUpdate;
