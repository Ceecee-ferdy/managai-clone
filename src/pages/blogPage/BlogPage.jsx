import { BlogCard } from "../../components/blog/BlogCard";
import { blogs } from "../../data/blogs";

import "./BlogPage.css";

export function BlogPage() {
  return (
    <section className="blog-page">
      <div className="blog-page-heading">
        <div className="blog-page-subheading">
          <p>Blog</p>
        </div>

        <h1>Actionable growth insights for modern businesses</h1>

        <p className="blog-page-description">
          Learn how to execute faster with AI planning, better team
          coordination, and measurable performance workflows.
        </p>
      </div>

      <div className="blog-page-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}