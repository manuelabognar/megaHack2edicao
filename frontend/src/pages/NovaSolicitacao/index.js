import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function NovaSolicitacao() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <p>nome do cartorio</p>
          <p>numero de matricula</p>
          <p>livro</p>
          <button>buscar</button>
          <br/><br/>
          <p>resultado da busca</p>
          <button>Solicitar matrícula</button>
          <br/><br/>
          <Link className="back-link" to="/">
              Voltar
          </Link>
        </section>
      </div>
    </div>
  );
}
