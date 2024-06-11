import React, { useState, useEffect } from "react";
import "./Body.css";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faJs, faHtml5, faGithub, faCss3, faDocker, faPython, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function Body({ isDarkMode }) {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);

  // useEffect(() => {
  //   console.log("Component mounted");
  //   const options = {
  //     threshold: 0.1
  //   };

  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         console.log("Element is intersecting:", entry.target);
  //         entry.target.classList.add('show');
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, options);

  //   const elements = document.querySelectorAll('.scroll-animation');
  //   console.log("Elements to observe:", elements);
  //   elements.forEach(element => {
  //     observer.observe(element);
  //   });

  //   return () => {
  //     elements.forEach(element => {
  //       observer.unobserve(element);
  //     });
  //   };
  // }, []);

  return (
    <>
      <div className={`myself ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="myselfContent">
          <h1 className="title">
            <ReactTyped
              strings={["Olá, eu sou a"]}
              typeSpeed={100}
              onComplete={() => setShowSecondLine(true)}
              showCursor={false}
            />
          </h1>
          {showSecondLine && (
            <h1 className="title">
              <ReactTyped
                strings={["Ana Luiza Suguimoto :)"]}
                typeSpeed={100}
                startDelay={200}
                showCursor={false}
                onComplete={() => setShowThirdLine(true)}
              />
            </h1>
          )}
          {showThirdLine && (
            <h3 className="subtitle">
              <ReactTyped
                strings={["Desenvolvedora Back-end"]}
                typeSpeed={100}
                showCursor={false}
                startDelay={300}
              />
            </h3>
          )}
          <button className="btn-rs">Github</button>
          <button className="btn-rs">LinkedIn</button>
          <button className="btn-mail">Entre em contato</button>
        </div>
        <div className="myselfImage">
          <img src="src/images/eu.svg" alt="Ana Luiza" />
        </div>
      </div>
      <div className={`about ${isDarkMode ? 'dark' : 'light'}`}>
        <h1 className="titleH2">Sobre mim</h1>
        <p className="paragraph">
          Desenvolvedora Back-end com projetos em Java, Node.js, Express.Js, SQL e aprendendo C#!
          Estou desenvolvendo e mantendo aplicações Backend REST utilizando ORM, arquitetura em camadas e Programação orientada à objetos (POO). 
          Sou apaixonada pelo poder da tecnologia em conectar o mundo e resolver problemas da sociedade.
          Tenho graduação psicologia e estou em transição de carreira para Web Development. Também tenho experiência na área de RH (recrutamento) e vivência em startups.
        </p>
      </div>
      {/* <div className={isDarkMode ? 'dark' : 'light'}>
        <h1 className="titleH2 scroll-animation">Principais habilidades</h1>
        <div className="habilities scroll-animation">
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
      </div> */}
    </>
  );
}
