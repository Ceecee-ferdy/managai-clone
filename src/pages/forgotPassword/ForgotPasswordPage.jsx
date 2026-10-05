import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { ForgotPasswordInfo } from "./ForgotPasswordInfo"
import "./ForgotPasswordPage.css";

export function ForgotPasswordPage() {
  return (
    <main className="forgot-password-page">
      <div className="forgot-password-layout">
        <ForgotPasswordForm />
        <ForgotPasswordInfo />
      </div>
    </main>
  );
}