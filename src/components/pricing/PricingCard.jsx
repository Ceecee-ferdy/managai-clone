import { Icon } from "@iconify/react";

import "./PricingCard.css";

export function PricingCard({ plan }) {
  return (
    <div className={`pricing-card ${plan.cardStyle}`}>
      <div className="pricing-card-header">
        <h4>{plan.name}</h4>

        {plan.popular && <div className="popular-badge">Most Popular</div>}
      </div>

      <div className="pricing-card-price">
        <h2>
          <span>{plan.price}</span>
          <sup>/month</sup>
        </h2>

        <p>{plan.description}</p>
      </div>

      <a href="/sign-up" className="pricing-button-link">
        <button
          className={
            plan.buttonStyle === "popular"
              ? "pricing-button popular"
              : "pricing-button"
          }
        >
          Get started
        </button>
      </a>

      <div className="pricing-divider"></div>

      <div className="pricing-features">
        <h4>{plan.featuresTitle}</h4>

        {plan.features.map((feature) => (
          <p
            className={`pricing-feature ${plan.popular ? "popular-feature" : ""}`}
            key={feature.text}
          >
            <Icon icon={`heroicons:${feature.icon}`} />
            <span>{feature.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
