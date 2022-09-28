import { React, useState } from "react";
import { FaBars } from "react-icons/fa";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdAccountCircle } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import Fade from "react-reveal/Fade";

function Header() {

  const [navClicked, setnavClicked] = useState(false);

  function popUp() {
    setnavClicked(!navClicked);
  }


  return (
    <div>
      <div className={classes.Container}>
        <div className={classes.Logodiv}>
          <img className={classes.Logo} src="/images/logo.svg" alt="tesla" />
        </div>
        <ul className={classes.UnOrderedList}>
          <div className={classes.List}>
            <Link to="/">MODEL S</Link>
          </div>
          <div className={classes.List}>
            <Link to="/">MODEL 3</Link>
          </div>
          <div className={classes.List}>
            <Link to="/">MODEL X</Link>
          </div>
          <div className={classes.List}>
            <Link to="/">MODEL Y</Link>
          </div>
        </ul>
        <div className={classes.RightNavigation}>
          <div className={classes.SHOP}>
            <Link to="/">SHOP</Link>
          </div>
          <div className={classes.ACC}>
            <Link to="/">TESLA ACCOUNT</Link>
            <IconContext.Provider value={{ size: 25 }}>
              <MdAccountCircle />
            </IconContext.Provider>
          </div>
          <div className={classes.NAVBAR}>
            <IconContext.Provider value={{ size: 30 }}>
              <FaBars onClick={popUp}/>
            </IconContext.Provider>
          </div>
        </div>
        {navClicked ?(<Fade top><div className={classes.Navigation_popup}>
          <div className={classes.Cancel}>
            <IconContext.Provider value={{ size: 25 }}>
              <CgClose onClick={popUp}/>
            </IconContext.Provider>
          </div>
          <li>
            <Link to="/">Model S</Link>
          </li>
          <li>
            <Link to="/">Model 3</Link>
          </li>
          <li>
            <Link to="/">Model X</Link>
          </li>
          <li>
            <Link to="/">Model Y</Link>
          </li>
          <li>
            <Link to="/">Power</Link>
          </li>
          <li>
            <Link to="/">Existing inventory</Link>
          </li>
          <li>
            <Link to="/">Used inventory</Link>
          </li>
          <li>
            <Link to="/">Trade-in</Link>
          </li>
          <li>
            <Link to="/">Cybertruck</Link>
          </li>
          <li>
            <Link to="/">Roadaster</Link>
          </li>
          <li>
            <Link to="/">Semi</Link>
          </li>
          <li>
            <Link to="/">Charging</Link>
          </li>
          <li>
            <Link to="/">Power</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/"><div className={classes.navAcc}>
              <Link to="/">TESLA ACCOUNT</Link>
              <IconContext.Provider value={{ size: 25 }}>
                <MdAccountCircle />
              </IconContext.Provider>
            </div></Link>
          </li>
        </div></Fade>): ""}
      </div>
    </div>
  );
}

export default Header;
