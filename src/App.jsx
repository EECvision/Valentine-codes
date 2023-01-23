import LandingPage from "./pages/LandingPage";
import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
