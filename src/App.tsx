import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, VerifyEmail } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="verifyEmail" element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  );
};
