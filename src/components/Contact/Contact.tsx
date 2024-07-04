import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Contact.css'; 

export default function Habilities({ isDarkMode }) {

  return (
    <>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <h1 className="titleH2Contatos">Meus contatos :)</h1>
        <div className="contacts">
        <a href="mailto:analuizajl5@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="fa-4x contactIcon"/>
        </a>
        <a href="https://www.linkedin.com/in/ana-luiza-lourenco/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-4x contactIcon"/>
        </a>
        <a href="https://github.com/analusuguimoto/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="fa-4x contactIcon"/>
        </a>
        </div>
      </div>
    </>
  );
}
