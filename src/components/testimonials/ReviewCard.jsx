import "./ReviewCard.css";

export function ReviewCard({ testimonial, progress }) {
  return (
    <div className="review-card">
      <h3 className="testimonial-title">{testimonial.title}</h3>

      <p className="testimonial-review">{testimonial.review}</p>

      <div className="progress-bar">
       <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
