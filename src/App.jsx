import { Routes, Route } from "react-router";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/blogPage/ArticlePage";
import { BlogPage } from "./pages/blogPage/BlogPage";
import { SignUpPage } from "./pages/signUpPage/SignUpPage";
import { TermsPage } from "./pages/termsPage/TermsPage";
import { SignInPage } from "./pages/signInPage/SignInPage";
import { ForgotPasswordPage } from "./pages/forgotPassword/ForgotPasswordPage";
import { SolutionPage } from "./pages/solutionpage/SolutionPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />

        <Route
          path="/blog"
          element={
            <>
              <Header />
              <BlogPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/blog/:slug"
          element={
            <>
              <Header />
              <ArticlePage />
              <Footer />
            </>
          }
        />

        <Route path="/sign-up" element={<SignUpPage />} />

        <Route
          path="/terms-and-conditions"
          element={
            <>
              <Header />
              <TermsPage />
              <Footer />
            </>
          }
        />

        <Route path="/sign-in" element={<SignInPage />} />

        <Route path="/forgot" element={<ForgotPasswordPage />} />

        <Route
          path="/privacy-policy"
          element={
            <>
              <Header />
              <PrivacyPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/:slug"
          element={
            <>
              <Header />
              <SolutionPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
