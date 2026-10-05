import { useState } from "react";
import { Icon } from "@iconify/react";
import "./SignInForm.css";

export function SignInForm() {
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
    <div className="sign-in-form-card">
      <div className="sign-in-form-header">
        <a href="/" className="sign-in-brand">
          <span className="sign-in-logo">M</span>
          <h2>ManagAI</h2>
        </a>

        <div className="sign-in-header-right">
          <span className="secure-session">Secure Session</span>

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
      <div className="mobile-workspace-box">
        <p>AI Workspace</p>
        <h3>Plan better, execute faster.</h3>
        <p>Sign in to continue tracking goals and team performance.  </p>
      </div>
      <div className="sign-in-content">
        <div className="sign-in-intro">
          <h1>Login to your business account</h1>
          <p>Continue to your business dashboard</p>

          <div className="secure-form-box">
            <div className="secure-form-box-left">
              <span>SECURE FORM</span>
            </div>
            <div className="secure-form-box-right">
              <span>Secure form</span>
            </div>
          </div>
        </div>

        <div className="sign-in-fields">
          <form>
            <div className="form-field">
              <label htmlFor="email">Enter your email address</label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                onBlur={handleBlur}
                className={errors.email ? "input-error" : ""}
                onChange={(event) => {
                  if (event.target.value.trim()) {
                    setErrors((prev) => ({
                      ...prev,
                      email: false,
                    }));
                  }
                }}
              />

              {errors.email && (
                <span className="input-error-message">
                  This field is required.
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>

              <div className="password-field">
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onBlur={handleBlur}
                  className={errors.password ? "input-error" : ""}
                  onChange={(event) => {
                    if (event.target.value.trim()) {
                      setErrors((prev) => ({
                        ...prev,
                        password: false,
                      }));
                    }
                  }}
                />

                <button type="button" aria-label="Show password">
                  <Icon icon="heroicons-outline:eye-off" />
                </button>
              </div>

              {errors.password && (
                <span className="input-error-message">
                  This field is required.
                </span>
              )}
            </div>

            <div className="form-status-box">
              <div className="form-status-header">
                <span>2 required fields</span>
                <span>Press Enter to continue</span>
              </div>

              <button type="submit" disabled>
                <div>Login</div>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="employee-sign-in">
        <a href="/">
          <Icon icon="formkit:people" />
          <span>Sign in as an Employee</span>
        </a>
      </div>

      <p className="sign-in-link-text">
        Don't have an account?
        <a href="/sign-up">Sign up here</a>
      </p>

      <p className="sign-in-link-text forgot-password">
        Forgot Password?
        <a href="/forgot">Click here</a>
      </p>
    </div>
  );
}
