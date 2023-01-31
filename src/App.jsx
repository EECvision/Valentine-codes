import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import Login from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
