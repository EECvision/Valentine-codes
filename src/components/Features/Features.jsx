// import { Button } from '@mui/material';
import classes from './Features.module.css';

function Features() {

    return (

    <section>
    <div className={classes.Featuressection}>

        <div className={classes.Featuresimg}>
            <img className={classes.image} src="../src/assets/img02.png" alt=""/>
        </div>
 
      <div className={classes.Featurescontent}>
        <h3 className={classes.Features}>Features</h3>
        <h2 className={classes.Featurestitle}>Excepteur sint occaecat cupidatat non proident.</h2>
        <h4 className={classes.Featuressubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h4>
       </div>
       
    </div>

    <div className={classes.Featuressection}>

      <div className={classes.Featurescontentmiddle}>
        <h3 className={classes.Features}>Features</h3>
        <h2 className={classes.Featurestitle}>Excepteur sint occaecat cupidatat non proident.</h2>
        <h4 className={classes.Featuressubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h4>
       </div>

       <div className={classes.Featuresimg}>
            <img className={classes.image} src="../src/assets/img03.png" alt=""/>
        </div>

    </div>

    <div className={classes.Featuressection}>

        <div className={classes.Featuresimg}>
            <img className={classes.image} src="../src/assets/img04.png" alt=""/>
        </div>

      <div className={classes.Featurescontent}>
        <h3 className={classes.Features}>Features</h3>
        <h2 className={classes.Featurestitle}>Excepteur sint occaecat cupidatat non proident.</h2>
        <h4 className={classes.Featuressubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h4>
       </div>

    </div>
    </section>
    
    );
}

export default Features;
