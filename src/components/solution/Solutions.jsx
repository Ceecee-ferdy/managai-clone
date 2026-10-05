import "./Solutions.css";

export function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions-heading">
        <div className="solutions-subheading">
          <p>SOLUTIONS</p>
        </div>

        <h2>Find the exact ManagAI workflow your team needs</h2>

        <p className="solutions-description">
          Explore focused solution pages designed for high-intent searches and
          faster onboarding.
        </p>
      </div>

      <div className="solutions-grid">
        <a href="/ai-goal-generator-for-smes" className="solution-card">
          <span className="solution-category">SME GROWTH</span>

          <h3>AI Goal Generator for SMEs</h3>

          <p>
            Generate weekly business goals with AI, align your team, and track
            execution in one workflow.
          </p>

          <div className="solution-cta">Explore solution</div>
        </a>

        <a
          href="/employee-performance-tracking-software"
          className="solution-card"
        >
          <span className="solution-category">PEOPLE OPS</span>

          <h3>Employee Performance Tracking Software</h3>

          <p>
            Track delivery, assign smarter goals, and identify top contributors
            with AI-backed insights.
          </p>

          <div className="solution-cta">Explore solution</div>
        </a>
      </div>
    </section>
  );
}
