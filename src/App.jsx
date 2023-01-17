import classes from './App.module.css';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import FAQ from './components/FAQ/Faq';
import Signup from './components/Signup/Signup';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <div className={classes.App}>
            <Header />
            <Features />
            <Signup />
            <FAQ />
            <Contact />
        </div>
    );
}

export default App;
