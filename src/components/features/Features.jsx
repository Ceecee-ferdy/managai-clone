import { useRef, useState, useEffect, useCallback } from "react";
import { FeatureCard } from "./FeatureCard";
import { features } from "../../data/feature";
import "./Features.css";

export function Features() {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  const [expandedFeatureId, setExpandedFeatureId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  const getTranslateAmount = useCallback(() => {
    const track = trackRef.current;

    if (!track) return 0;

    const items = track.querySelectorAll(".feature-slider-item");

    if (!items.length) return 0;

    const targetIndex = Math.min(currentIndex, items.length - 1);
    const targetItem = items[targetIndex];

    return Math.max(0, targetItem.offsetLeft);
  }, [currentIndex]);

  const translateAmount = Math.min(getTranslateAmount(), maxTranslate);

  useEffect(() => {
    const updateSlider = () => {
      const viewport = sliderRef.current;
      const track = trackRef.current;

      if (!viewport || !track) return;

      const maximumMovement = Math.max(
        0,
        track.scrollWidth - viewport.clientWidth,
      );

      setMaxTranslate(maximumMovement);
    };

    updateSlider();

    const resizeObserver = new ResizeObserver(updateSlider);

    if (sliderRef.current) resizeObserver.observe(sliderRef.current);
    if (trackRef.current) resizeObserver.observe(trackRef.current);

    window.addEventListener("resize", updateSlider);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSlider);
    };
  }, [expandedFeatureId]);

  const items = trackRef.current?.querySelectorAll(".feature-slider-item");
  const maximumIndex = items?.length ? items.length - 1 : 0;

  const isAtStart = currentIndex === 0;
  const isAtEnd = maximumIndex === 0 || translateAmount >= maxTranslate - 2;

  const handlePrevious = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  const handleNext = () => {
    setCurrentIndex((index) => Math.min(maximumIndex, index + 1));
  };

  return (
    <section className="features" id="features">
      <div className="features-heading">
        <div className="features-subheading">
          <p>LOVED BY BUSINESS OWNERS</p>
        </div>

        <h2>The perfect plan exists for your business.</h2>
      </div>

      <div className="features-viewport" ref={sliderRef}>
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
          aria-label="Previous feature"
        >
          {"<"}
        </button>

        <button
          className="feature-btn feature-right"
          onClick={handleNext}
          disabled={isAtEnd}
          aria-label="Next feature"
        >
          {">"}
        </button>
      </div>
    </section>
  );
}
