import { Link } from "react-router";
import "./forgotPasswordInfo.css";

export function ForgotPasswordInfo() {
  return (
    <aside className="forgot-info">
      <div className="forgot-info-overlay"></div>

      <div className="forgot-info-content">
        <div className="forgot-info-header">
          <Link to="/" className="forgot-info-brand">
            <span className="forgot-info-logo">M</span>
            <h2>ManagAI</h2>
          </Link>

          <span className="forgot-workspace-label">
            A workspace for your team
          </span>
        </div>

        <div className="forgot-info-text">
          <h2>
            Move from ideas to execution with AI-powered business clarity
          </h2>

          <p>
            Plan faster, align your team, and track results from one intelligent
            workspace.
          </p>
        </div>

        <div className="forgot-info-visual">
          <img
            src="/images/login-img-content.svg"
            alt="Business growth visual"
          />
        </div>
      </div>
    </aside>
  );
}