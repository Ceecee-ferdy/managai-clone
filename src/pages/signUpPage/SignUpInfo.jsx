import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Icon } from "@iconify/react";
import "./SignUpInfo.css";

export function SignUpInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 100) {
          return previousProgress;
        }
        return previousProgress + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % 3);
      setProgress(0);
    }
  }, [progress]);

  return (
    <aside className="signup-info">
      <div className="signup-info-gradient"></div>
      <div className="signup-info-glow-one"></div>
      <div className="signup-info-glow-two"></div>

      <div className="signup-info-content">
        <div className="signup-info-header">
          <Link to="/" className="signup-info-logo"> ManagAI </Link>
          <div className="workspace-badge">
            <span>A workspace for your team</span>
          </div>
        </div>

        <div className="signup-info-layout">
          <div className="signup-metrics">
            <div className="metric-card">
              <span>Live Goals</span>
              <div className="metric-sweep"></div>
            </div>

            <div className="metric-card">
              <span>Team Pulse</span>
              <div className="metric-sweep metric-sweep-delay-one"></div>
            </div>

            <div className="metric-card">
              <span>AI Signals</span>
              <div className="metric-sweep metric-sweep-delay-two"></div>
            </div>
          </div>

          <div className="signup-info-bottom">
            <div className="signup-info-main">
              <h1>Next Gen AI Assistance for Business Growth</h1>

              <p>
                Enjoy AI-powered insights and grow your business with
                confidence.
              </p>
            </div>

            <div className="signup-info-cards">
              <div
                className={`signup-info-card card ${
                  currentIndex === 0 ? "active-card" : ""
                }`}
              >
                <div className="glow-orb-container">
                  <div className="glow-orb glow-orb-one"></div>
                  <div className="glow-orb glow-orb-two"></div>
                </div>

                <div className="signup-info-card-header">
                  <span className="signup-info-card-number">1</span>
                  <Icon icon="ph:user-circle-plus-duotone" />
                </div>

                <div className="signup-info-card-content">
                  <h4>Create your account</h4>

                  <p>
                    Start with your team profile and secure workspace setup.
                  </p>
                </div>

                <div className="card-track">
                  {currentIndex === 0 && (
                    <div
                      className="card-progress"
                      style={{ width: `${progress}%` }}
                    ></div>
                  )}
                </div>
              </div>

              <div
                className={`signup-info-card card ${
                  currentIndex === 1 ? "active-card" : ""
                }`}
              >
                <div className="glow-orb-container">
                  <div className="glow-orb glow-orb-one"></div>
                  <div className="glow-orb glow-orb-two"></div>
                </div>

                <div className="signup-info-card-header">
                  <span className="signup-info-card-number">2</span>
                  <Icon icon="ph:target-duotone" />
                </div>

                <div className="signup-info-card-content">
                  <h4>Create your business and set goals</h4>

                  <p>
                    Define priorities and assign owners with structure.
                  </p>
                </div>

                <div className="card-track">
                  {currentIndex === 1 && (
                    <div
                      className="card-progress"
                      style={{ width: `${progress}%` }}
                    ></div>
                  )}
                </div>
              </div>

              <div
                className={`signup-info-card card ${
                  currentIndex === 2 ? "active-card" : ""
                }`}
              >
                <div className="glow-orb-container">
                  <div className="glow-orb glow-orb-one"></div>
                  <div className="glow-orb glow-orb-two"></div>
                </div>

                <div className="signup-info-card-header">
                  <span className="signup-info-card-number">3</span>
                  <Icon icon="ph:chart-line-up-duotone" />
                </div>

                <div className="signup-info-card-content">
                  <h4>Get AI-powered insights and grow your business</h4>

                  <p>
                    Track outcomes and make better strategic decisions.
                  </p>
                </div>

                <div className="card-track">
                  {currentIndex === 2 && (
                    <div
                      className="card-progress"
                      style={{ width: `${progress}%` }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
