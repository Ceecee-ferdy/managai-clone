
import { useState } from "react";
import { Link } from "react-router";
import { Icon } from "@iconify/react";
import "./ForgotPasswordForm.css";

export function ForgotPasswordForm() {
  const [errors, setErrors] = useState({});

  const handleBlur = (event) => {
    const { id, value } = event.target;

    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [id]: true,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
  };

  return (
    <div className="forgot-form-card">
      <div className="forgot-form-header">
        <Link to="/" className="forgot-brand">
          <span className="forgot-logo">M</span>
          <h2>ManagAI</h2>
        </Link>

        <div className="forgot-header-right">
          <span className="forgot-secure-session">Secure Session</span>

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
        </div>
      </div>

      <div className="forgot-mobile-workspace">
        <p>AI Workspace</p>
        <h3>Plan better, execute faster.</h3>
        <p>Sign in to continue tracking goals and team performance.</p>
      </div>

      <div className="forgot-content">
        <div className="forgot-intro">
          <h1>Reset your password </h1>
          <p>Enter your email to receive password reset instructions</p>

          <div className="forgot-secure-form-box">
            <div className="forgot-secure-form-left">
              <span>SECURE FORM</span>
            </div>

            <div className="forgot-secure-form-right">
              <span>Secure form</span>
            </div>
          </div>
        </div>

        <div className="forgot-fields">
          <form>
            <div className="forgot-form-field">
              <label htmlFor="forgot-email">
                Enter your email address
              </label>

              <input
                id="forgot-email"
                type="text"
                placeholder="Email"
                onBlur={handleBlur}
                className={errors["forgot-email"] ? "input-error" : ""}
                onChange={(event) => {
                  if (event.target.value.trim()) {
                    setErrors((prev) => ({
                      ...prev,
                      "forgot-email": false,
                    }));
                  }
                }}
              />

              {errors["forgot-email"] && (
                <span className="forgot-input-error-message">
                  This field is required.
                </span>
              )}
            </div>

            <div className="forgot-status-box">
              <div className="forgot-status-header">
                <span>1 required fields</span>
                <span>Press Enter to continue</span>
              </div>

              <button type="submit" disabled>
                <div>Submit</div>
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="forgot-login-link">
        Go back to login
        <Link to="/sign-in">Login</Link>
      </p>
    </div>
  );
}
