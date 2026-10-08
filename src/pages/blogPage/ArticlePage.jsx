/* import { Link, useParams } from "react-router";
import { blogArticles } from "../../data/blogArticles";

import "./ArticlePage.css";

export function ArticlePage() {
  const { slug } = useParams();

  const article = blogArticles.find((article) => article.slug === slug);

  if (!article) {
    return (
      <article className="article-page">
        <h1>Article not found</h1>
        <p className="article-description">
          We couldn't find the article you're looking for.
        </p>
        <Link className="article-back-link" to="/blog">
          <div>Back to blog</div>
        </Link>
      </article>
    );
  }

  return (
    <article className="article-page">
      <p className="article-meta">
        {article.category} · {article.readTime}
      </p>

      <h1>{article.title}</h1>

      <p className="article-description">{article.description}</p>

      <img src={article.image} alt={article.title} className="article-image" />

      <div className="article-content">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>

      <Link className="article-back-link" to="/blog" viewTransition>
        <div>Back to blog</div>
      </Link>
    </article>
  );
} */

 import { Link, useParams } from "react-router";
import { blogArticles } from "../../data/blogArticles";

import "./ArticlePage.css";

export function ArticlePage() {
  const { slug } = useParams();

  const article = blogArticles.find((article) => article.slug === slug);

  return (
    <article className="article-page">
      <p className="article-meta">
        {article.category} · {article.readTime}
      </p>

      <h1>{article.title}</h1>

      <p className="article-description">{article.description}</p>

      <img src={article.image} alt={article.title} className="article-image" />

      <div className="article-content">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>

      <Link className="article-back-link" to="/blog" viewTransition>
        <div>Back to blog</div>
      </Link>
    </article>
  );
} 
