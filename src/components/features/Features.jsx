
import { useRef, useState, useEffect } from "react";
import { FeatureCard } from "./FeatureCard";
import { features } from "../../data/feature";
import "./Features.css";

export function Features() {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  const [expandedFeatureId, setExpandedFeatureId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const updateSlider = () => {
      if (!sliderRef.current || !trackRef.current) return;

      const viewportWidth = sliderRef.current.clientWidth;
      const trackWidth = trackRef.current.scrollWidth;

      const maximumMovement = Math.max(
        0,
        trackWidth - viewportWidth
      );

      setMaxTranslate(maximumMovement);

      setIsAtStart(currentIndex === 0);

      const currentMovement = getTranslateAmount();

      setIsAtEnd(currentMovement >= maximumMovement);
    };

    updateSlider();

    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, [currentIndex, expandedFeatureId]);

  const getTranslateAmount = () => {
    if (!trackRef.current) return 0;

    const item = trackRef.current.querySelector(
      ".feature-slider-item"
    );

    if (!item) return 0;

    const itemWidth = item.getBoundingClientRect().width;
    const gap = 32;

    return currentIndex * (itemWidth + gap);
  };

  const handlePrevious = () => {
    if (isAtStart) return;

    setCurrentIndex((previousIndex) => previousIndex - 1);
  };

  const handleNext = () => {
    if (isAtEnd) return;

    setCurrentIndex((previousIndex) => previousIndex + 1);
  };

  const translateAmount = Math.min(
    getTranslateAmount(),
    maxTranslate
  );

  return (
    <section className="features" id="features">

      <div className="features-heading">
        <div className="features-subheading">
          <p>LOVED BY BUSINESS OWNERS</p>
        </div>

        <h2>The perfect plan exists for your business.</h2>
      </div>

      <div
        className="features-viewport"
        ref={sliderRef}
      >
        <div
          className="features-track"
          ref={trackRef}
          style={{
            transform: `translate3d(-${translateAmount}px, 0, 0)`,
          }}
        >

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isExpanded={expandedFeatureId === feature.id}
              onExpand={() => {
                setExpandedFeatureId(feature.id);
              }}
              onClose={() => {
                setExpandedFeatureId(null);
              }}
            />
          ))}

        </div>
      </div>

      <div className="features-navigation">

        <button
          className="feature-btn feature-left"
          onClick={handlePrevious}
          disabled={isAtStart}
        >
          {"<"}
        </button>

        <button
          className="feature-btn feature-right"
          onClick={handleNext}
          disabled={isAtEnd}
        >
          {">"}
        </button>

      </div>

    </section>
  );
}
