import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="content">
        <section>
          <h2 className="logo">Sistema de Consulta de Matrículas</h2>
          <h1>Sobre nós</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </p>
          <Link className="back-link" to="/">
            Voltar
          </Link>
        </section>
        
        <div>
          <p className="occupation">Negócios: </p>
          <p>Rodrigo</p>

          <p className="occupation">Marketing:</p>
          <p>Karen</p>

          <p className="occupation">Desenvolvedores:</p>
          <p>Manuela Bognar</p>
          <p>Patricia Frizzatti</p>
          <p>William Paulo</p>
        </div>
      </div>       
    </div>
  );
}
