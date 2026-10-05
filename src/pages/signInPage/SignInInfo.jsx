import { Icon } from "@iconify/react";
import "./SignInInfo.css"

export function SignInInfo() {
  return (
    <aside className="sign-in-info">
      <div className="sign-in-info-overlay"></div>

      <div className="sign-in-info-content">
        <div className="sign-in-info-header">
          <a href="/" className="sign-in-info-brand">
            <span className="sign-in-info-logo">M</span>
            <h2>ManagAI</h2>
          </a>

          <span className="workspace-label">
            A workspace for your team
          </span>
        </div>

        <div className="sign-in-info-text">
          <h2>
            Move from plans to progress with a smarter operating rhythm
          </h2>

          <p>
            Set goals, assign owners, and monitor delivery with real-time
            AI-powered guidance.
          </p>
        </div>

        <div className="workspace-visual">
          <div className="workspace-glow"></div>

          <div className="orbital-ring orbital-ring-one"></div>
          <div className="orbital-ring orbital-ring-two"></div>

          <div className="floating-chip floating-chip-top">
            <Icon icon="ph:target-duotone" />
            <span>Goal Sync</span>
          </div>

          <div className="floating-chip floating-chip-right">
            <Icon icon="ph:trend-up-duotone" />
            <span>Growth +18%</span>
          </div>

          <div className="floating-chip floating-chip-left">
            <Icon icon="ph:users-three-duotone" />
            <span>Team Aligned</span>
          </div>

          <div className="center-card">
            <div className="center-card-halo"></div>

            <div className="center-card-content">
              <div className="center-card-badge">
                <Icon icon="ph:sparkle-duotone" />
              </div>

              <p>Live Workspace</p>

              <h3>
                Plan, assign, and track performance in one flow.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
