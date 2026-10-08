import { Link } from "react-router";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <p>© 2026 ManagAI. All rights reserved.</p>

          <nav className="footer-nav">
            <Link to="/ai-goal-generator-for-smes">
              AI Goal Generator for SMEs
            </Link>

            <Link to="/employee-performance-tracking-software">
              Employee Performance Tracking
            </Link>

            <Link to="/blog">Blog</Link>

            <Link to="/privacy-policy">Privacy Policy</Link>

            <Link to="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
