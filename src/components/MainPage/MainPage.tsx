import React, { useState, useEffect } from 'react';
import Header from "../Header/Header.tsx";
import Body from "../Body/Body";
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer.tsx';
import Habilities from '../Habilities/Habilities.tsx';
import Contact from '../Contact/Contact.tsx';
import './MainPage.css';

const MainPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'darkMode' : 'lightMode';
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Body isDarkMode={isDarkMode} />
      <Habilities isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      
    </div>
  );
};

export default MainPage;

