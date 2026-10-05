import { Link } from "react-router";

import './BlogCard.css';

export function BlogCard({ blog }) {
  return (
   <Link className="blog-card" to={`/blog/${blog.slug}`} aria-label={blog.title}>
      <div className="blog-image-wrap">
        <img className="blog-image" src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-subtitle">{blog.subtitle}</span>
          <span className="blog-separator">·</span>
          <span className="blog-duration">{blog.duration}</span>
        </div>

        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-description">{blog.description}</p>
      </div>
    </Link>
  );
}