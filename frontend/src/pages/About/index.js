import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function About() {
  return (

    <div className="register-container">
      <div className="content">
        
        <main>
          <h2 className="logo">Sistema de Consulta de Matrículas</h2>
          <p>
            Unimos cartórios de todo o Brasil para facilitar a transação de documentos 
            de forma prática, fácil e segura para ambas as partes
           </p>
        </main>

        <section>
          <Link type="button" className="buttonClean" to="/cartorio">
            Sou um Cartório
          </Link>
          <Link type="button" className="buttonClean" to="/solicitante">
            Sou um Solicitante
          </Link>
        </section>
      </div>
    </div>
  );
}
