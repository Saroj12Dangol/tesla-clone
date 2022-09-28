import React from "react";
import classes from "./Section.module.css";
import Details from "./Details";
import Fade from "react-reveal/Fade";

function Section() {
  const detail = Details.map((details) => (
    <div
      className={classes.Wrap}
      style={{ backgroundImage: `url("images/${details.background}")` }}
    >
      <Fade bottom>
        <div className={classes.ItemText}>
          <h1>{details.title}</h1>
          <p>{details.description}</p>
        </div>
      </Fade>
      <Fade bottom>
        <div>
          <div className={classes.ButtonGroup}>
            <div className={classes.LeftButton}>{details.leftbtnText}</div>

            {details.rightbtnText && (
              <div className={classes.RightButton}>{details.rightbtnText}</div>
            )}
          </div>

          <img
            className={classes.DownArrow}
            src="/images/down-arrow.svg"
            alt="downarrow"
          />
        </div>
      </Fade>
    </div>
  ));
  return <div>{detail}</div>;
}

export default Section;
