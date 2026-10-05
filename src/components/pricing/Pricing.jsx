import { pricingPlans } from "../../data/pricingData";
import { PricingCard } from "./PricingCard";
import "./Pricing.css";

export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-heading">
        <div className="pricing-badge">Loved By Business Owners</div>
        <h1>The perfect plan for your business exists</h1>
      </div>

      <div className="pricing-cards">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
