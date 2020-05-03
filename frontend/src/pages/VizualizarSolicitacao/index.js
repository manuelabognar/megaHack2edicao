import React from 'react';
import { Link } from 'react-router-dom';

export default function VizualizarSolicitacao() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <p>
            O pdf enviado pelo cartório aparecerá aqui
          </p>
          <Link className="back-link" to="/solicitante">
              Voltar
          </Link>
        </section>
      </div>
    </div>
  );
}
