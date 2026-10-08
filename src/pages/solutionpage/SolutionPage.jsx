import { Link, useParams } from "react-router";
import { solutions } from "../../data/solution";

import "./SolutionPage.css";

export function SolutionPage() {
  const { slug } = useParams();

  const solution = solutions.find((solution) => solution.slug === slug);

  if (!solution) {
    return (
      <main className="solution-page">
        <section className="solution-container">
          <h1>Solution not found</h1>
          <p className="solution-description">
            We couldn't find the page you're looking for.
          </p>
          <Link to="/" className="solution-start-button">
            Back to home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="solution-page">
      <section className="solution-container">
        <p className="solution-category">{solution.category}</p>

        <h1>{solution.title}</h1>

        <p className="solution-description">{solution.description}</p>

        <div className="solution-features">
          {solution.features.map((feature) => (
            <article className="solution-feature-card" key={feature.title}>
              <h2>{feature.title}</h2>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="solution-actions">
          <Link to="/sign-up" className="solution-start-button">
            Start Free
          </Link>

          <Link to={solution.ctaLink} className="solution-features-button" target="_blank" rel="noreferrer">
            {solution.ctaText}
          </Link>
        </div>
      </section>
    </main>
  );
}  

  /*

 import { useParams } from "react-router";
import { solutions } from "../../data/solution";

import "./SolutionPage.css";

export function SolutionPage() {
  const { slug } = useParams();

  const solution = solutions.find((solution) => solution.slug === slug);

  return (
    <main className="solution-page">
      <section className="solution-container">
        <p className="solution-category">{solution.category}</p>

        <h1>{solution.title}</h1>

        <p className="solution-description">{solution.description}</p>

        <div className="solution-features">
          {solution.features.map((feature) => (
            <article className="solution-feature-card" key={feature.title}>
              <h2>{feature.title}</h2>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="solution-actions">
          <a href="/sign-up" className="solution-start-button">
            Start Free
          </a>

          <a href={solution.ctaLink} className="solution-features-button">
            {solution.ctaText}
          </a>
        </div>
      </section>
    </main>
  );
}  */
