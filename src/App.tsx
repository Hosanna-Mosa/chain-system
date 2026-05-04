import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./routes/index";
import LoginPage from "./routes/login";
import RegisterPage from "./routes/register";
import DashboardPage from "./routes/dashboard";
import NetworkPage from "./routes/network";
import ProfilePage from "./routes/profile";
import WalletPage from "./routes/wallet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wallet" element={<WalletPage />} />
        {/* Fallback for 404 can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
