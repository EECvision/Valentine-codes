// import { Button } from '@mui/material';
import classes from "./FAQ.module.css";

function FAQ() {
  return (
    <main>
      <div className={classes.faqcontainer}>
        <h1 className={classes.title}>Frequently Asked Questions</h1>

        <div className={classes.accordion}>
          <div className={classes.faqimg}>
            <img src="src/assets/FAQ.jpeg" alt="FAQ-img" className={classes.accordionimg} />
          </div>

          <div className={classes.contentaccordion}>
            <div className={classes.questionanswer}>
              <div className={classes.question}>
                <h3 className={classes.titlequestion}>What is Moneywise?</h3>
                <button type="button" className={classes.questionbtn}>
                  <span className={classes.upicon}>
                    <i className="fas fa-chevron-up" />
                  </span>
                  <span className={classes.downicon}>
                    <i className="fas fa-chevron-down" />
                  </span>
                </button>
              </div>
              <div className={classes.answer}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda
                  sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?
                </p>
              </div>
            </div>

            <div className={classes.questionanswer}>
              <div className={classes.question}>
                <h3 className={classes.titlequestion}>What is Moneywise?</h3>
                <button type="button" className={classes.questionbtn}>
                  <span className={classes.upicon}>
                    <i className="fas fa-chevron-up" />
                  </span>
                  <span className={classes.downicon}>
                    <i className="fas fa-chevron-down" />
                  </span>
                </button>
              </div>
              <div className={classes.answer}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda
                  sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?
                </p>
              </div>
            </div>

            <div className={classes.questionanswer}>
              <div className={classes.question}>
                <h3 className={classes.titlequestion}>What is Moneywise?</h3>
                <button type="button" className={classes.questionbtn}>
                  <span className={classes.upicon}>
                    <i className="fas fa-chevron-up" />
                  </span>
                  <span className={classes.downicon}>
                    <i className="fas fa-chevron-down" />
                  </span>
                </button>
              </div>
              <div className={classes.answer}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda
                  sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?
                </p>
              </div>
            </div>

            <div className={classes.questionanswer}>
              <div className={classes.question}>
                <h3 className={classes.titlequestion}>What is Moneywise?</h3>
                <button type="button" className={classes.questionbtn}>
                  <span className={classes.upicon}>
                    <i className="fas fa-chevron-up" />
                  </span>
                  <span className={classes.downicon}>
                    <i className="fas fa-chevron-down" />
                  </span>
                </button>
              </div>
              <div className={classes.answer}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda
                  sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?
                </p>
              </div>
            </div>

            <div className={classes.questionanswer}>
              <div className={classes.question}>
                <h3 className={classes.titlequestion}>What is Moneywise?</h3>
                <button type="button" className={classes.questionbtn}>
                  <span className={classes.upicon}>
                    <i className="fas fa-chevron-up" />
                  </span>
                  <span className={classes.downicon}>
                    <i className="fas fa-chevron-down" />
                  </span>
                </button>
              </div>
              <div className={classes.answer}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda
                  sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FAQ;
