import React from 'react';
import { Link } from 'react-router-dom';

export default function VisualizarSolicitacao() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
            <h2 className="logo">Sistema de Consulta de Matrículas</h2>

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
