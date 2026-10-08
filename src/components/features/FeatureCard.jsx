
import "./FeatureCard.css";

export function FeatureCard({
  feature,
  isExpanded,
  onExpand,
  onClose,
}) {
  const Icon = feature.image;

  return (
    <>
      {/* NORMAL FEATURE CARD */}
      <div className="feature-slider-item">
        <article className="feature-card">
          <div className="feature-image">
            <Icon />
          </div>

          <div className="feature-content">
            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <button
              className="learn-more-btn"
              onClick={onExpand}
            >
              Learn More
            </button>
          </div>
        </article>
      </div>

      {/* EXPANDED FEATURE CARD */}
      {isExpanded && (
        <div className="feature-slider-item">
          <div className="feature-card-detail-wrapper">
            <article className="feature-card-detail">
              <h3>{feature.title}</h3>

              <p>{feature.expandedDescription}</p>

              <div className="feature-detail-footer">
                <button
                  className="feature-close-btn"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
}
