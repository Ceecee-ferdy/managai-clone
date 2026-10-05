import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <div>
            <div className="contact-badge">Contact us</div>

            <h2>Smart Growth starts with a conversation – Contact us</h2>

            <p>
              Have questions or feedback? We are here to help. Send us a message
              and we will respond within 24 hours, or email us at{" "}
              <a href="mailto:support@managaihq.com">support@managaihq.com</a>
            </p>
          </div>

          <div className="contact-links">
            <div className="contact-link-groups">
              <aside>
                <div className="contact-link-badge">navigation</div>

                <ul>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#solutions">Solutions</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                </ul>
              </aside>

              <aside>
                <div className="contact-link-badge">company</div>

                <ul>
                  <li>
                    <a href="/ai-goal-generator-for-smes">
                      AI Goal Generator for SMEs
                    </a>
                  </li>
                  <li>
                    <a href="/employee-performance-tracking-software">
                      Employee Performance Tracking
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </aside>
            </div>

            <div className="contact-arrow">
              <svg
                width="20"
                height="30"
                viewBox="0 0 20 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99977 2.66602L10.0002 29.3327M9.99977 2.66602L18.3332 10.9993M9.99977 2.66602L1.6665 10.9993"
                  stroke="white"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <main className="contact-form">
          <form>
            <fieldset>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jonathan Doe"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Type message"
                rows="5"
                required
              ></textarea>
            </fieldset>

            <button type="submit">Send Message</button>
            
          </form>
        </main>
      </div>
    </section>
  );
}
