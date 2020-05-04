import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

export default function VisualizarSolicitacao() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="SCM"></img>

          <h1>Visualizar Matrícula</h1>
          <p>
            A matrícula enviada pelo cartório aparecerá aqui
          </p>

          <Link className="back-link" to="/solicitante">
            Voltar
          </Link>
          </section>
      </div>
    </div>
  );
}
