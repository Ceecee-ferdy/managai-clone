import { termsData } from "../../data/termsData";

import "./TermsPage.css";

export function TermsPage() {
  return (

      <main className="terms-page">
        <div className="terms-container">
          <h1>Terms and Conditions</h1>

          <div className="terms-content">
            <h3>Terms and Conditions</h3>

            <p className="last-updated">
              Last Updated: April 24, 2025
            </p>

            {termsData.map((section) => (
              <p key={section.title}>
                <strong>{section.title}</strong>
                <br />

                {Array.isArray(section.content)
                  ? section.content.map((item, index) => (
                      <span key={item}>
                        {item}
                        {index < section.content.length - 1 && <br />}
                      </span>
                    ))
                  : section.content}

                {section.email && (
                  <>
                    {" "}
                    <a href={`mailto:${section.email}`}>
                      {section.email}
                    </a>
                    .
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      </main>

  );
}
