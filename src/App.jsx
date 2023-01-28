import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import Login from "./components/Login/Login";
import Signup from "./Pages/Signup/Signup";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
