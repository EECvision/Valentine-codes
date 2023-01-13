import { useState } from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';


function App() {

    return (
        <div className={classes.App}>
            <Header />
            <h1 className={classes.title}>Finance Budgeting</h1>
        </div>
    );
}

export default App;
