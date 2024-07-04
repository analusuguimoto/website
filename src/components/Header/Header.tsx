import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

export default function Header({ toggleTheme, isDarkMode }) {
  return (
    <>
      <header>
        <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
          <span className="header-title">Meu portfólio!</span>
          <button onClick={toggleTheme} className="themeToggle">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="fa-2xl" />
          </button>
        </div>
      </header>
    </>
  );
}
