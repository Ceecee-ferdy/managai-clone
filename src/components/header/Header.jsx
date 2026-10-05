import { Link, useLocation } from "react-router";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Icon } from "@iconify/react";
import {
  LuSlidersHorizontal,
  LuLayoutGrid,
  LuBookOpen,
  LuTag,
  LuPhone,
} from "react-icons/lu";
import "./Header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getSectionLink = (section) => {
    return location.pathname === "/" ? `#${section}` : `/#${section}`;
  };

  return (
    <header>
      <div className="container header-inner">
        {/* Left */}
        <div className="header-left">
          <Link to="/" className="brand" aria-label="ManagAI home">
            <span className="brand-text">ManagAI</span>
          </Link>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={toggleMenu}
          >
            {isMenuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="header-middle">
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <a href={getSectionLink("features")} onClick={closeMenu}>
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a href={getSectionLink("solutions")} onClick={closeMenu}>
                  Solutions
                </a>
              </li>

              <li className="nav-item">
                <Link to="/blog" onClick={closeMenu}>
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <a href={getSectionLink("pricing")} onClick={closeMenu}>
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a href={getSectionLink("contact")} onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="header-right">
          <div className="language-selector">
            <span className="language-icon">
              <Icon icon="heroicons-outline:language" />
            </span>

            <span>English</span>

            <Icon
              icon="heroicons-outline:chevron-down"
              className="language-arrow"
            />
          </div>

          <Link to="/sign-up" className="cta-primary">
            Start Free
          </Link>

          <Link to="/sign-in" className="cta-secondary">
            Login
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div className="overlay" onClick={closeMenu}></div>

          <aside className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <Link to="/" className="brand" onClick={closeMenu}>
                <span className="brand-text">ManagAI</span>
              </Link>

              <button
                className="mobile-close-button"
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <IoClose />
              </button>
            </div>

            <nav>
              <ul className="mobile-nav-list">
                <li className="mobile-nav-item">
                  <a href={getSectionLink("features")} onClick={closeMenu}>
                    <LuSlidersHorizontal />
                    <span>Features</span>
                  </a>
                </li>

                <li className="mobile-nav-item">
                  <a href={getSectionLink("solutions")} onClick={closeMenu}>
                    <LuLayoutGrid />
                    <span>Solutions</span>
                  </a>
                </li>

                <li className="mobile-nav-item">
                  <Link to="/blog" onClick={closeMenu}>
                    <LuBookOpen />
                    <span>Blog</span>
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <a href={getSectionLink("pricing")} onClick={closeMenu}>
                    <LuTag />
                    <span>Pricing</span>
                  </a>
                </li>

                <li className="mobile-nav-item">
                  <a href={getSectionLink("contact")} onClick={closeMenu}>
                    <LuPhone />
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mobile-menu-ctas">
              <Link to="/sign-up" className="cta-primary" onClick={closeMenu}>
                Start Free
              </Link>

              <Link to="/sign-in" className="cta-secondary" onClick={closeMenu}>
                Login
              </Link>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
