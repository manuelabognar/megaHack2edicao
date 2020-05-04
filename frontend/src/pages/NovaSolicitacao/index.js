import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function NovaSolicitacao() {

  const [livro, setLivro] = useState('');
  const [matricula, setMatricula] = useState('');  

  function handleSolicitarMatricula(e) {
    e.preventDefault();
    
    //alert("Matrícula solicitada com sucesso");
  }

  return (
    <div className="register-container">
      <div className="content">
       
      <section>
          <h2 className="logo">Sistema de Consulta de Matrículas</h2>

            <h1>Solicitar matrícula</h1>
            <p>
              Preencha os campos do formuláro com os dados referente ao documento desejado.
            </p>
            <p>
              O cartório responsável receberá sua solicitação e retornará em breve.
            </p>

            <Link className="back-link" to="/solicitante">
              Voltar
            </Link>
        </section>

        <section>
          <form onSubmit={handleSolicitarMatricula}>

            <select id="cartorios" className="appearance-select">
              <option value="0" selected disabled>Selecione o cartório</option>
              <option value="1">10º Registro de matrícula Vila Mariana</option>
              <option value="2">5º Cartório de imóveis</option>
              <option value="3">4º Cartório de imóveis de São Paulo</option>
            </select>
            
            <input
              placeholder="Livro" 
              value={livro}
              onChange={e => setLivro(e.target.value)}
            />
          
            <input
              placeholder="Matricula" 
              value={matricula}
              onChange={e => setMatricula(e.target.value)}
            />

            <button className="button" type="submit">Solicitar matrícula</button>
          </form>
          
        </section>

        
      </div>
    </div>
  );
}
