// import { Button } from '@mui/material';
import classes from './Header.module.css';

function Header() {

    return (
    <div className={classes.Header}>
            {/* Nav Bar */}
            <nav className={classes.nav}>
            <a className={classes.navbrand} href="www.page.com">Moneywise</a>
                <ul className={classes.navitems}>
                    <li>About</li>
                    <li>Features</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                </ul>
                <div className={classes.navbutton}>
               <button type="button" className={classes.button} >Login in</button>
               <button type="button" className={classes.button} >Get Started</button>
               </div>
            </nav>

            {/* Header */}
            <div className={classes.Headercontent}>
                <div className={classes.row}>
                    <div className={classes.col6}>
                        <h1 className={classes.Headertitle}>Gaining control of your finances has never been easier</h1>
                        <h4 className={classes.Headersubtitle}>Introducing the Moneywise budgeting app for managing your finances! With our app, you can easily track your expenses, set financial goals, and create a personalized budget.</h4>
                        <button type="button" className={classes.Headerbutton}>Get Started</button>
                        <button type="button" className={classes.Headerbutton}>Watch Demo</button>
                    </div>

                    <div className={classes.col6}>
                        <img className={classes.Headerimg} src="../src/assets/img01.png" alt=""/>
                    </div>
                </div>
            </div>    

    </div>
    );
}

export default Header;
