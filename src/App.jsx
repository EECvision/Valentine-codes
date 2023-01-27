import classes from "./App.module.css";
import Signup from "./Pages/Signup/Signup";
// import Signin from "./Pages/Signin/Signin";
// import Navbar from "./components/Navbar/Navbar";
// import Header from "./components/Header/Header";

function App() {
  return (
    <div className={classes.App}>
      {/* /* <Navbar /> */}
      {/* // <Header />  */}
      <Signup />
      {/* <Signin /> */}
    </div>
  );
}

export default App;
