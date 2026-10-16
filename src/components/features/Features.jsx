import { useEffect, useRef, useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { features } from "../../data/feature";
import "./Features.css";

export function Features() {
  const sliderRef = useRef(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [expandedFeatureId, setExpandedFeatureId] = useState(null);

  useEffect(() => {
    const viewport = sliderRef.current;

    if (!viewport) return;

    const checkScrollPosition = () => {
      setIsAtStart(viewport.scrollLeft <= 2);

      setIsAtEnd(
        viewport.scrollLeft + viewport.clientWidth >=
          viewport.scrollWidth - 2,
      );
    };

    checkScrollPosition();

    viewport.addEventListener("scroll", checkScrollPosition, {
      passive: true,
    });

    window.addEventListener("resize", checkScrollPosition);

    const observer = new ResizeObserver(checkScrollPosition);

    observer.observe(viewport);

    const track = viewport.querySelector(".features-track");

    if (track) {
      observer.observe(track);
    }

    return () => {
      viewport.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
      observer.disconnect();
    };
  }, []);

  const scrollToCard = (direction) => {
    const viewport = sliderRef.current;

    if (!viewport) return;

    const cards = Array.from(
      viewport.querySelectorAll(".feature-slider-item"),
    );

    if (cards.length === 0) return;

    const viewportRect = viewport.getBoundingClientRect();

    const cardOffsets = cards.map(
      (card) =>
        card.getBoundingClientRect().left -
        viewportRect.left +
        viewport.scrollLeft,
    );

    const currentScroll = viewport.scrollLeft;

    let currentIndex = 0;

    for (let i = 1; i < cardOffsets.length; i++) {
      if (
        Math.abs(cardOffsets[i] - currentScroll) <
        Math.abs(cardOffsets[currentIndex] - currentScroll)
      ) {
        currentIndex = i;
      }
    }

    const nextIndex = Math.max(
      0,
      Math.min(cards.length - 1, currentIndex + direction),
    );

    viewport.scrollTo({
      left: cardOffsets[nextIndex],
      behavior: "smooth",
    });
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
        <div className="features-track">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isExpanded={expandedFeatureId === feature.id}
              onExpand={() => setExpandedFeatureId(feature.id)}
              onClose={() => setExpandedFeatureId(null)}
            />
          ))}
        </div>
      </div>

      <div className="features-navigation">
        <button
          className="feature-btn feature-left"
          onClick={() => scrollToCard(-1)}
          disabled={isAtStart}
          aria-label="Previous feature"
        >
          {"<"}
        </button>

        <button
          className="feature-btn feature-right"
          onClick={() => scrollToCard(1)}
          disabled={isAtEnd}
          aria-label="Next feature"
        >
          {">"}
        </button>
      </div>
    </section>
  );
}

