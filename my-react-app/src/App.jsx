// App.jsx — FINAL RENDER OF ALL ACTIVITIES

import Car from "./components/Car";

// Activity 1 Components
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

// Activity 2 (MUI Styled Components)
import LoginForm_MUI from "./components/LoginForm_MUI";
import SignUp_MUI from "./components/SignUp_MUI";

// Activity 3 Summary Components
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>

      {/* ===========================
          CHALLENGE ACTIVITY 3
          Header + Footer Summary
      ============================ */}
      <Header />
      <p style={{ maxWidth: 800, margin: "20px auto", textAlign: "justify" }}>
        React is a JavaScript library for building user interfaces. It is 
        component-based, fast, reusable, and uses JSX. It renders into a root
        container using createRoot(). React uses Props, Components, ES6 features
        like arrow functions and .map() for lists. Styling can be done through
        CSS, Modules, Inline, Styled Components, and Frameworks like Material UI.
      </p>

      {/* ===========================
          CHALLENGE ACTIVITY 1
      ============================ */}
      <h2>Challenge Activity 1 — Component Creation</h2>
      <Car />
      <LoginForm />
      <SignUpForm />

      {/* ===========================
          CHALLENGE ACTIVITY 2
      ============================ */}
      <h2 style={{ marginTop: 40 }}>Challenge Activity 2 — MUI Styled</h2>
      <LoginForm_MUI />
      <SignUp_MUI />

      {/* === FOOTER SUMMARY (Activity 3) === */}
      <Footer />

    </div>
  );
}
