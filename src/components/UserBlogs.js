import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";

const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/blog/user/${id}`)
      .catch((err) => console.log(err));

    const data = await res.data;

    return data;
  };
  useEffect(() => {
    sendRequest()
      .then((data) => setUser(data.user))
      .catch((err) => console.log(err));
  }, []);

  console.log(user);

  return (
    <div>
      {user?.blogs &&
        user.blogs.map((blog, index) => (
          <BlogCard
            key={index}
            id={blog._id}
            isUser={true}
            title={blog.title}
            imageUrl={blog.image}
            description={blog.description}
            userName={user.name}
          />
        ))}
    </div>
  );
};

export default UserBlogs;
