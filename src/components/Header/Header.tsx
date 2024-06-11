import React from "react";
import "./Header.css";

export default function Header({ toggleTheme }) {
  return (
    <>
      <header>
        <div className="header">
          <span className="header-title">Meu portfólio!</span>
          <button onClick={toggleTheme} className="themeToggle">
            Toggle Theme
          </button>
        </div>
      </header>
    </>
  );
}
