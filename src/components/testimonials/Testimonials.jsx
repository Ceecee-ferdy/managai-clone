import { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";
import { CustomerCard } from "./CustomerCard";
import { ReviewCard } from "./ReviewCard";

import "./Testimonials.css";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 100) {
          return previousProgress;
        }

        return previousProgress + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setCurrentIndex(
        (previousIndex) => (previousIndex + 1) % testimonials.length,
      );

      setProgress(0);
    }
  }, [progress]);

  const handleNext = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex + 1) % testimonials.length,
    );

    setProgress(0);
  };

  return (
    <section className="testimonials">
      <div className="testimonials-heading">
        <div className="testimonials-subheading">
          <p>LOVED BY BUSINESS OWNERS</p>
        </div>

        <h1>What our customers say about us</h1>
      </div>

      <div className="testimonials-flex">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id || index}
            className={`testimonial-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <CustomerCard testimonial={testimonial} onNext={handleNext} />

            <ReviewCard
              testimonial={testimonial}
              progress={index === currentIndex ? progress : 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
