import { useEffect, useRef, useState } from "react";
import { userTypes } from "../../data/users";
import { UserCard } from "./UserCard";
import "./ManagaiUser.css";

export function ManagaiUser() {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const sliderRef = useRef(null);

  /*
  const checkScrollPosition = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    setIsAtStart(scrollLeft <= 0);

    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
  }; */

  /*
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
  }; */

  useEffect(() => {
    const viewport = sliderRef.current;

    if (!viewport) return;

    const checkScrollPosition = () => {
      setIsAtStart(viewport.scrollLeft <= 2);

      setIsAtEnd(
        viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 2,
      );
    };

    checkScrollPosition();

    viewport.addEventListener("scroll", checkScrollPosition, {
      passive: true,
    });

    window.addEventListener("resize", checkScrollPosition);

    const observer = new ResizeObserver(checkScrollPosition);

    observer.observe(viewport);

    const track = viewport.querySelector(".who-can-use-cards-track");

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

    const cards = Array.from(viewport.querySelectorAll(".user-card"));

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

  const scrollLeft = () => scrollToCard(-1);

  const scrollRight = () => scrollToCard(1);

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

        {/*RIGHT SIDE — CARDS  */}
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
