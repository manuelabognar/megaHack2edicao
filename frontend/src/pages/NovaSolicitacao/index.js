import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function NovaSolicitacao() {

  const [livro, setLivro] = useState('');
  const [matricula, setMatricula] = useState('');  

  function handleSolicitarMatricula() {
    alert("Matrícula solicitada com sucesso");
  }

  return (
    <div className="register-container">
      <div className="content">
       
        <main>
          <form>

            <select id="cartorios">
              <option value="0">Registro de matrícula XPTO</option>
              <option value="1">5º Cartório de imóveis</option>
            </select>
            
            <input
              placeholder="livro" 
              value={livro}
              onChange={e => setLivro(e.target.value)}
            />
          
            <input
              placeholder="matricula" 
              value={matricula}
              onChange={e => setMatricula(e.target.value)}
            />

            <button className="button">Buscar</button>
          </form>

          <br/><br/>

          <p>resultado da busca</p>
          <button onClick={handleSolicitarMatricula}>Solicitar matrícula</button>
          <br/><br/>
          
          <Link className="back-link" to="/solicitante">
              Voltar
          </Link>
        </main>
      </div>
    </div>
  );
}
