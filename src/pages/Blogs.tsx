import React from "react";
import { blogPosts, Page } from "../blogsData";

type BlogsProps = {
  goToPage: (page: Page) => void;
};

const Blogs: React.FC<BlogsProps> = ({ goToPage }) => (
  <div className="page">
    <h2>Machine Learning</h2>
    <div className="blog-links">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="blog-link"
          onClick={() => goToPage(post.id as Page)}
        >
          {post.title}
        </div>
      ))}
    </div>
  </div>
);

export default Blogs;
