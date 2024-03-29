/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./newHeader.css";
import { CSSTransition } from "react-transition-group";


export default function NewHeader() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <a href='/' style={{textDecoration: "none"}}>
      <div style={{display: "flex", flexDirection: "row"}}>
      <img src={require("./nav_bar_logo.png")} className="Logo" alt="logo" /> 
      <a href = '/'><div style={{color: "white", fontSize: 30, paddingTop: 7, paddingLeft: 8, fontFamily: "Roboto"}}>  RSSLA</div></a>
      </div>
      </a>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/programs">PROGRAMS</a>
          <a href="/board">BOARD</a>
          <a href="/prospectives">PROSPECTIVES</a>
          <a href="/contact">CONTACT</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
      <img src={require("./nav_bar_logo.png")} className="Logo" alt="logo" /> 
      </button>
    </header>
  );
}