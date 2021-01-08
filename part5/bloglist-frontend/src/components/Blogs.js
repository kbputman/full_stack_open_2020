import React from "react";
import Blog from "./Blog";

const Blogs = ({ blogs, handleDeleteBlog }) => {
  return (
    <div>
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleDeleteBlog={handleDeleteBlog}
          ></Blog>
        ))}
    </div>
  );
};

export default Blogs;
