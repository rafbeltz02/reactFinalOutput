import { Routes, Route } from "react-router-dom";
import LoginForm_MUI from "./components/LoginForm_MUI";
import SignUp_MUI from "./components/SignUp_MUI";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LoginForm_MUI />} /> {/* Default route */}
        <Route path="/signup" element={<SignUp_MUI />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}
