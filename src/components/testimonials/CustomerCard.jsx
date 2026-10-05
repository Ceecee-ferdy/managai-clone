import { Icon } from "@iconify/react";
import "./CustomerCard.css";

export function CustomerCard({ testimonial, onNext }) {
  return (
    <div className="customer-card">
      <div className="stats">
        {testimonial.stats.map((stat) => (
          <div className="stat-item" key={stat.value}>
            <h1 className="stat-value">{stat.value}</h1>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="customer-info">
        <div className="left-section">

        <div className="customer-image">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>

        <div className="customer-details">
          <h1 className="customer-name">{testimonial.name}</h1>
          <p className="customer-company">{testimonial.company}</p>
        </div>

        </div>

        <div className="right-section">
        <button className="scroll-right" onClick={onNext}>
        <Icon icon="iconamoon:arrow-right-2-thin" />
        </button>
        </div>

      </div>

    </div>
  );
}
