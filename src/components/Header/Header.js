import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

//rafce
const Header = (props) => {
   return (
      <div className={styles.header}>
         <h1>Pokemon</h1>
      </div>
   );
};

export default Header;
