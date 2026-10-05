
import "./AllInsights.css";

export function AllInsights() {

  return (
    <section className="ai-insights-wrapper" >
      {/* SLIDE 1 */}
      <section
        className="insight-slide background-01"
        style={{
          backgroundImage: "url(bg-img-01.png)",
        }}
      >
        <div className="insight-content">
          <h1>Monthly AI Insights</h1>

          <div className="insight-image">
            <img src="images/strategy-img.png" alt="Monthly AI Insights" />
          </div>

          <p>
            Leverage AI to uncover patterns, forecast business outcomes, and
            receive data-driven recommendations for smarter decisions.
          </p>
        </div>
      </section>

      {/* SLIDE 2 */}
      <section
        className="insight-slide background-02"
        style={{
          backgroundImage: "url(bg-img-02.png)",
        }}
      >
        <div className="insight-content">
          <h1>Improved Business Goals</h1>

          <div className="insight-image">
            <img src="images/growth-img.png" alt="Improved Business Goals" />
          </div>

          <p>
            Automatically generate and refine weekly goals based on team
            performance, business priorities, and real-time operational data.
          </p>
        </div>
      </section>

      {/* SLIDE 3 */}
      <section
        className="insight-slide background-03"
        style={{
          backgroundImage: "url(bg-img-03.png)",
        }}
      >
        <div className="insight-content">
          <h1>Employee Management</h1>

          <div className="insight-image">
            <img src="images/people-img.png" alt="Employee Management" />
          </div>

          <p>
            Assign the right tasks to the right people. Track workload, optimize
            performance, and reward top contributors effortlessly.
          </p>
        </div>
      </section>
    </section>
  );
}
