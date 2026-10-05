import { Icon } from "@iconify/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import "./SignUpForm.css";

export function SignUpForm() {
  const [errors, setErrors] = useState({});

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [password, setPassword] = useState("");

  const handleBlur = (event) => {
    const { id, value } = event.target;

    if (!value.trim()) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [id]: true,
      }));

      event.target.classList.add("input-error");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (value) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }

    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!/[a-z]/.test(value)) {
      return "Password must contain at least one lowercase letter";
    }

    if (!/[0-9]/.test(value)) {
      return "Password must contain at least one number";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return "Password must contain at least one special character";
    }

    return "";
  };

  return (
    <div className="signup-card">
      <div className="signup-card-header">
        <a href="/" className="signup-logo">
          ManagAI
        </a>

        <div className="signup-header-right">
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

      <div className="mobile-intro">
        <span className="mobile-intro-label">AI Workspace</span>

        <h2>Plan better, execute faster.</h2>

        <p>Set up your workspace and start tracking goals in minutes.</p>
      </div>

      <div className="signup-heading">
        <h1>Create your ManagAI account</h1>

        <p>Set up your workspace and start tracking goals in minutes.</p>
      </div>

      <div className="secure-form">
        <div className="secure-form-left">
          <span>SECURE FORM</span>
        </div>

        <div className="secure-form-right">
          <span>Secure form</span>
        </div>
      </div>

      <div className="form-divider"></div>

      <form className="signup-form">
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>

            <input
              id="firstName"
              type="text"
              placeholder="John"
              required
              onBlur={handleBlur}
            />

            {errors.firstName && (
              <span className="input-error-message">
                This field is required.
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="lastName">Last Name</label>

            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              required
              onBlur={handleBlur}
            />

            {errors.lastName && (
              <span className="input-error-message">
                This field is required.
              </span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              required
              onBlur={handleBlur}
            />

            {errors.email && (
              <span className="input-error-message">
                This field is required.
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              type="tel"
              placeholder="+234..."
              required
              onBlur={handleBlur}
            />

            {errors.phone && (
              <span className="input-error-message">
                This field is required.
              </span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="referralCode">
              Referral Code <span>(Optional)</span>
            </label>

            <input
              id="referralCode"
              type="text"
              placeholder="ref_xxx_optional"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>

            <div className="password-input">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                required
                onBlur={handleBlur}
                onChange={(event) => {
                  const value = event.target.value;

                  setPassword(value);

                  if (value.length > 0) {
                    setErrors((previousErrors) => ({
                      ...previousErrors,
                      password: false,
                    }));
                  }

                  if (value.length === 0) {
                    setPasswordError("");
                    return;
                  }

                  setPasswordError(validatePassword(value));
                }}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            {errors.password && (
              <span className="input-error-message">
                This field is required.
              </span>
            )}

            {passwordError && (
              <span className="input-error-message">{passwordError}</span>
            )}
          </div>
        </div>

        <div className="form-field confirm-password-field">
          <label htmlFor="confirmPassword">Confirm Password</label>

          <div className="password-input">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              required
              onBlur={handleBlur}
              onChange={(event) => {
                const value = event.target.value;

                if (value.length > 0) {
                  setErrors((previousErrors) => ({
                    ...previousErrors,
                    confirmPassword: false,
                  }));

                  event.target.classList.remove("input-error");
                }

                if (value.length === 0) {
                  setConfirmPasswordError("");
                  return;
                }

                const validationError = validatePassword(value);

                if (validationError) {
                  setConfirmPasswordError(validationError);
                  return;
                }

                if (value !== password) {
                  setConfirmPasswordError("Passwords do not match");
                  return;
                }

                setConfirmPasswordError("");
              }}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>

          {errors.confirmPassword && (
            <span className="input-error-message">This field is required.</span>
          )}

          {confirmPasswordError && (
            <span className="input-error-message">{confirmPasswordError}</span>
          )}
        </div>

        <div className="terms">
          <label className="terms-label">
            <input type="checkbox" />

            <span>
              I have read and agree to the{" "}
              <a href="/terms-and-conditions" target="_blank" rel="noreferrer">
                Terms and Conditions
              </a>
              .
            </span>
          </label>
        </div>

        <div className="form-footer">
          <div className="form-footer-info">
            <span>6 required fields</span>

            <span>Press Enter to continue</span>
          </div>

          <button type="submit" className="create-account-button" disabled>
            Create account
          </button>
        </div>
      </form>

      <div className="signin-prompt">
        <span>Already have an account?</span> <a href="/sign-in">Sign in here</a>
      </div>
    </div>
  );
}

