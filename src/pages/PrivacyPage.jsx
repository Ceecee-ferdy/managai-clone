import { privacyData } from "../data/privacyData";
import "./PrivacyPage.css";

export function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <h1>{privacyData.title}</h1>

        <div className="privacy-content">
          <h2>{privacyData.title}</h2>

          <p className="privacy-date">
            {privacyData.lastUpdated}
          </p>

          {privacyData.sections.map((section) => (
            <section key={section.number} className="privacy-section">
              <p>
                <strong>
                  {section.number} {section.title}
                </strong>
                <br />

                {section.content}
              </p>

              {section.items && (
                <div className="privacy-items">
                  {section.items.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              )}

              {section.contact && (
                <p>
                  {section.contact}{" "}
                  {section.email && (
                    <a href={`mailto:${section.email}`}>
                      {section.email}
                    </a>
                  )}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}