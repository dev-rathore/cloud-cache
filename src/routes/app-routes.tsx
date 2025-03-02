import { BrowserRouter as Router, Routes, Route } from "react-router";

import LandingPage from "@/pages/landing";
import FourZeroFour from "@/pages/four-zero-four";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
