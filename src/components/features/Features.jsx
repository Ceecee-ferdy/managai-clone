import { useRef, useState, useEffect } from "react";
import { FeatureCard } from "./FeatureCard";
import { features } from "../../data/feature";
import "./Features.css";

export function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const [expandedFeatureId, setExpandedFeatureId] = useState(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const maxIndex = features.length - visibleCards;

  const sliderRef = useRef(null);

  const checkScrollPosition = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    setIsAtStart(scrollLeft <= 0);

    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollPosition();
  }, [expandedFeatureId]);


  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -324,
      behavior: "smooth",
    });

    setTimeout(checkScrollPosition, 350);
  }; 

  
  
  const scrollRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: 324,
      behavior: "smooth",
    });

    setTimeout(checkScrollPosition, 350);
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
          onClick={scrollLeft}
          disabled={isAtStart}
        >
          {"<"}
        </button>

        <button
          className="feature-btn feature-right"
          onClick={scrollRight}
          disabled={isAtEnd}
        >
          {">"}
        </button>
      </div>
    </section>
  );
} 