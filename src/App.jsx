import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
