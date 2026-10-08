import { Link } from "react-router";

import heroImage from "../../assets/hero-image.png";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Turn business goals into a clear weekly plan.
        </h1>
        <p className="hero-description">
          Use AI to create actionable goals, assign owners, and track team
          progress across every business and project in one workspace.
        </p>
        <div className="hero-actions">
          <Link className="hero-button" to="/sign-up">
            <span className="hero-button-icon">↗</span>

            <span className="hero-button-border">
              <span className="hero-button-text">Get Started</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="hero-media">
        <img src={heroImage} alt="ManagAI dashboard preview" />
      </div>
    </section>
  );
}
