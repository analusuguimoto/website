import React, { useEffect } from "react";
import "./Habilities.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faGithub, faCss3, faDocker, faPython, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function Habilities({ isDarkMode }) {

  return (
    <>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <h1 className="titleH2">Principais habilidades</h1>
        <div className="habilities">
          <FontAwesomeIcon icon={faJs} className="fa-5x icon js" />
          <FontAwesomeIcon icon={faJava} className="fa-5x icon java" />
          <FontAwesomeIcon icon={faNodeJs} className="fa-5x icon node" />
          <FontAwesomeIcon icon={faPython} className="fa-5x icon py" />
          <FontAwesomeIcon icon={faDocker} className="fa-5x icon docker" />
          <FontAwesomeIcon icon={faReact} className="fa-5x icon react" />
          <FontAwesomeIcon icon={faCss3} className="fa-5x icon css" />
          <FontAwesomeIcon icon={faHtml5} className="fa-5x icon html" />
          <FontAwesomeIcon icon={faGithub} className="fa-5x icon gh" />
        </div>
      </div>
    </>
  );
}
