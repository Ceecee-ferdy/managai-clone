import { Link } from "react-router";  
import { BlogCard } from './BlogCard';
import { blogs } from '../../data/blogs';
import './Blog.css';


export function Blog() {
  return ( 
    
    <section className="blog" id="blog">
       <div className="blog-heading">
        <div className="blog-subheading">
          <p>BLOG</p>
        </div>

        <h2>Insights to help your business grow smarter</h2>

        <p className="blog-description">
         Practical strategies on AI planning, team performance, and execution for modern SMEs.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

       <Link to="/blog">
       <button className="blog-cta">
        View all articles  
      </button>
       </Link>
      

    </section>
  )
}