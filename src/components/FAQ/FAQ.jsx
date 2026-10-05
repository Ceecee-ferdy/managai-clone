import { faqs } from "../../data/faq";
import "./FAQ.css";

export function FAQ() {
  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-badge">Frequently asked questions</div>

        <h2 className="faq-heading">AI goal management questions, answered</h2>

        <p className="faq-description">
          Learn how ManagAI helps small businesses plan, assign, and track goals
          with AI.
        </p>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.id}>
              <summary className="faq-question">
                {faq.question}
                <span className="faq-icon">+</span>
              </summary>

              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
