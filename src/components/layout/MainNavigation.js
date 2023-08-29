import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>Perficient Bench Tracking</div>
        <nav>
          <ul>
            <li>
              <Link to="/consultants">Consultants</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
}

export default MainNavigation;
