import { SignUpForm } from "./SignUpForm";
import { SignUpInfo } from "./SignUpInfo";
import "./SignUpPage.css";


export function SignUpPage() {
  return (
    <section className="signup-page">
      <div className="signup-container">
        <SignUpForm />
        <SignUpInfo />
      </div>
    </section>
  );
}