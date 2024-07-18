import React, { useEffect } from "react";
import blogs from "/blogs.png";
import crops from "/crops.png";
import museu from "/museu-crop.png";
import recipes from "/recipes-app.png";
import restaurant from "/restaurant-crop.png";
import tfc from "/tfc.png";
import "./Projects.css";

export default function Projects({ isDarkMode }) {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const options = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, options);

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      <div className={`projetos ${isDarkMode ? 'dark' : 'light'}`}>
        <h2 className="projH2Title">Alguns projetos</h2>
      </div>
      <div className="firstGroup">
        <div className="card">
            <img src={crops} alt="plantação" className="crops" />
            <div className="overlay">
              <h3>Sistema de Fazendas</h3>
            </div>
            <div className="technologies">
              <span className="back">Back-end</span>
              <span className="languages">Java</span>
              <a href="https://github.com/analusuguimoto/farm-project" target="_blank" rel="noopener noreferrer" className="github">Veja no Github</a>
            </div>
        </div>
        <div className="card">
          <img src={museu} alt="museu" className="museumImage" />
          <div className="overlay">
            <h3>Localizador de museus</h3>
          </div>
          <div className="technologies">
            <span className="back">Back-end</span>
            <span className="languages">Java</span>
            <a href="https://github.com/analusuguimoto/museum-finder" target="_blank" rel="noopener noreferrer" className="github">Veja no Github</a>
          </div>
        </div>
        <div className="card">
          <img src={restaurant} alt="menu" className="restaurant" />
          <div className="overlay">
            <h3>Restaurant Orders</h3>
          </div>
          <div className="technologies">
            <span className="back">Back-end</span>
            <span className="languages">Python</span>
            <a href="https://github.com/analusuguimoto/restaurant-orders" target="_blank" rel="noopener noreferrer" className="github">Veja no Github</a>
          </div>
        </div>
      </div>
      <div className="secondGroup">
        <div className="card">
          <img src={tfc} alt="Tabela classificação futebol clube" className="futebol" />
          <div className="overlay">
            <h3>Futebol clube</h3>
          </div>
          <div className="technologies">
            <span className="back">Back-end</span>
            <span className="languages">Node.js</span>
            <a href="https://github.com/analusuguimoto/futebol-clube" target="_blank" rel="noopener noreferrer" className="github">Veja no Github</a>
          </div>
        </div>
        <div className="card">
          <img src={blogs} alt="Blogs API" className="blogs" />
          <div className="overlay">
            <h3>Blogs API</h3>
          </div>
          <div className="technologies">
            <span className="back">Back-end</span>
            <span className="languages">Node.js</span>
            <a href="https://github.com/analusuguimoto/blogs-api" target="_blank" rel="noopener noreferrer" className="github">Veja no Github</a>
          </div>
        </div>
        <div className="card">
          <img src={recipes} alt="Recipes App" className="recipes" />
          <div className="overlay">
            <h3>Recipes App</h3>
          </div>
          <div className="technologies">
            <span className="front">Front-end</span>
            <span className="languages">React.js</span>
            <a href="https://github.com/analusuguimoto/recipes-app" target="_blank" rel="noopener noreferrer" className="github">Veja no Github</a>
          </div>
        </div>
      </div>
    </>
  );
}
