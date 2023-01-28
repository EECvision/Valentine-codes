import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import Login from "./components/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
