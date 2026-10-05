import { useEffect, useRef, useState } from "react";
import { userTypes } from "../../data/users";
import { UserCard } from "./UserCard";
import "./ManagaiUser.css";

export function ManagaiUser() {

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const sliderRef = useRef(null);

  const checkScrollPosition = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    setIsAtStart(scrollLeft <= 0);

    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -334,
      behavior: "smooth",
    });

    setTimeout(checkScrollPosition, 350);
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: 334,
      behavior: "smooth",
    });

    setTimeout(checkScrollPosition, 350);
  };

  return (
    <section className="managai-users">
      <div className="user-grid">
        <div className="user-heading">
          <div className="user-subheading">
            <p>LOVED BY BUSINESS OWNERS</p>
          </div>

          <h1>Who Managai is for</h1>

          <p className="user-description">
            From Startups to Retail businesses, everyone benefits from the
            opportunities Managai provides
          </p>
        </div>

        { /*RIGHT SIDE — CARDS  */}
        <div className="who-can-use-cards-viewport" ref={sliderRef}>
          <div className="who-can-use-cards-track">
            {userTypes.map((userType) => (
              <UserCard key={userType.id} userType={userType} />
            ))}
          </div>
        </div>
      </div>

      <div className="navigation-button">
        <button
          className="user-btn user-left"
          onClick={scrollLeft}
          disabled={isAtStart}
        >
          {"<"}
        </button>

        <button
          className="user-btn user-right"
          onClick={scrollRight}
          disabled={isAtEnd}
        >
          {">"}
        </button>
      </div>
    </section>
  );
} 
