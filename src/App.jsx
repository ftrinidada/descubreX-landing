import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DescubreXLanding from "./DescubreXLanding";
import PrivacyPage from "./PrivacyPage";
import TermsPage from "./TermsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DescubreXLanding />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
        <Route path="/terminos" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}