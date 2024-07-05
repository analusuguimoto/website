import React, { useState } from "react";
import "./Body.css";
import { ReactTyped } from "react-typed";
import imgMe from "../../../public/myself-png.png";

export default function Body({ isDarkMode }) {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);

  return (
    <>
      <div className={`myself ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="myselfContent">
          <h1 className="title">
            <ReactTyped
              strings={["Olá, eu sou a"]}
              typeSpeed={70}
              onComplete={() => setShowSecondLine(true)}
              showCursor={false}
            />
          </h1>
          {showSecondLine && (
            <h1 className="title">
              <ReactTyped
                strings={["Ana Luiza Suguimoto :)"]}
                typeSpeed={70}
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
                typeSpeed={80}
                showCursor={false}
                startDelay={300}
              />
            </h3>
          )}
          <button className="btn-rs">
            <a href="https://github.com/analusuguimoto/" target="_blank" rel="noopener noreferrer">Github</a>
          </button>
          <button className="btn-rs">
            <a href="https://www.linkedin.com/in/ana-luiza-lourenco/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </button>
          <button className="btn-mail">
            <a href="mailto:analuizajl5@gmail.com">Entre em contato</a>
          </button>
        </div>
        <div className="myselfImage">
          <img src={imgMe} alt="Ana Luiza" />
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
    </>
  );
}
