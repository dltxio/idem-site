import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, VerifyEmail, Privacy } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
};
