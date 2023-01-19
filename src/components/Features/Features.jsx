// import { Button } from '@mui/material';
import classes from './Features.module.css';

function Features() {

    return (

    <section>
   <div className={classes.Featuremain}>
    
        <div className={classes.Featurebox}>
          <span className={classes.iconstyle}>
          <i className="fa-solid fa-circle-check" />
          </span>
          <h3 className={classes.Featureheading}>Lorem ipsum</h3>
          <p className={classes.Featuretext}>Lacus vel facilisis volutpat est velit egestas dui. Elit sed vulputate mi sit amet mauris commodo quis.</p>
        </div>

        <div className={classes.Featurebox}>
            <span className={classes.iconstyle}>
            <i className="fa-solid fa-eye" />       
            </span>
          <h3 className={classes.Featureheading}>Lorem ipsum</h3>
          <p className={classes.Featuretext}>Lacus vel facilisis volutpat est velit egestas dui. Elit sed vulputate mi sit amet mauris commodo quis.</p>
        </div>
        
        <div className={classes.Featurebox}>
          <span className={classes.iconstyle}>
          <i className="fa-solid fa-laptop-code" />
          </span>
          <h3 className={classes.Featureheading}>Lorem ipsum</h3>
          <p className={classes.Featuretext}>Lacus vel facilisis volutpat est velit egestas dui. Elit sed vulputate mi sit amet mauris commodo quis.</p>
        </div>
       </div>
      
    <div className={classes.Featuresection}>

        <div className={classes.Featureimg}>
            <img className={classes.image} src="../src/assets/img02.png" alt=""/>
        </div>
 
      <div className={classes.Featurecontent}>
        <h3 className={classes.Feature}>Features</h3>
        <h2 className={classes.Featuretitle}>Excepteur sint occaecat cupidatat non proident.</h2>
        <h4 className={classes.Featuresubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h4>
       </div>
       
    </div>

    <div className={classes.Featuresection}>

      <div className={classes.Featurecontentmiddle}>
        <h3 className={classes.Feature}>Features</h3>
        <h2 className={classes.Featuretitle}>Excepteur sint occaecat cupidatat non proident.</h2>
        <h4 className={classes.Featuresubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h4>
       </div>

       <div className={classes.Featureimage}>
            <img className={classes.image} src="../src/assets/img03.png" alt=""/>
        </div>

    </div>

    <div className={classes.Featuresection}>

        <div className={classes.Featureimg}>
            <img className={classes.image} src="../src/assets/img04.png" alt=""/>
        </div>

      <div className={classes.Featurecontent}>
        <h3 className={classes.Feature}>Features</h3>
        <h2 className={classes.Featuretitle}>Excepteur sint occaecat cupidatat non proident.</h2>
        <h4 className={classes.Featuresubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h4>
       </div>

    </div>
    </section>
    
    );
}

export default Features;
