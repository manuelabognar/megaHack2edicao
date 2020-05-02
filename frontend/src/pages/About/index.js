import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function About() {
  return (
    <div className="about-container">
      <div>
        <header>

        <h2 className="logo">Sistema de Consulta de Matrículas</h2>

        <Link type="button" className="buttonClean" to="/loginCartorio">
          Login Cartório
        </Link>


        <Link type="button" className="buttonClean" to="/loginSolicitante">
          Login Solicitante
        </Link>

        </header>
        <main>
          <br/><br/><br/>
          <p>
            Explicar a aplicação... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </p>


        </main>
      </div>       
    </div>
  );
}
