import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
const Blog = () => {
  const [blog, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:4000/api/blog")
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blog));
  }, []);

  return (
    <div>
      {blog &&
        blog.map((blog, index) => (
          <BlogCard
            isUser={localStorage.getItem("userId") === blog.user._id}
            key={index}
            id={blog._id}
            title={blog.title}
            imageUrl={blog.image}
            description={blog.description}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
};

export default Blog;
