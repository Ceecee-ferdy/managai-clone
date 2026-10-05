import "./Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <p>© 2026 ManagAI. All rights reserved.</p>

          <nav className="footer-nav">
            <a href="/ai-goal-generator-for-smes">AI Goal Generator for SMEs</a>
            <a href="/employee-performance-tracking-software">
              Employee Performance Tracking
            </a>
            <a href="/blog">Blog</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
