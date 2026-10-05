import { BusinessOwnersIllustration } from "../illustrations/BusinessOwnersIllustration";
import "./BusinessOwners.css";

export function BusinessOwners() {
  return (
    <div className="business-owners">
      <div className="business-heading">
        <div className="business-subheading">
          <p>LOVED BY BUSINESS OWNERS</p>
        </div>

        <h2>Managai unlocks business growth and workflow in any usecase</h2>

        <p className="business-description">
          Use the best data foundation alongside flexible workflows to turn any
          growth idea into reality-from CRM enrichment to intent based outbound.
          Iterate quickly to scale your best experiments
        </p>

        <a href="/sign-up" className="business-start-button">
          <button className="business-cta">Get started now</button>
        </a>
      </div>

      <div className="business-media">
        <BusinessOwnersIllustration />
      </div>
    </div>
  );
}
