import { SignInForm } from "./SignInForm";
import { SignInInfo } from "./SignInInfo";
import "./SignInPage.css"


export function SignInPage() {
  return (
    <main className="sign-in-page">
      <div className="sign-in-layout">
        <SignInForm />
        <SignInInfo />
      </div>
    </main>
  );
}
