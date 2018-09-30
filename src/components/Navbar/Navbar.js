import React from "react";
import "./Navbar.css";

const styles = {
  nav: {
    background: "orange"
  }
}


const Navbar = props => (
  <nav style={styles.nav} className="navbar">
    
      <div id="pageTitle"><a href="/">React Click Game</a></div>
      <div id="pageGuess" className="message"> {props.message} </div>
      <div id="pageScore" className="score">Score: {props.score} | Top Score: {props.topScore}</div>
    
  </nav>
);

export default Navbar;
