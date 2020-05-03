import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../contexts/auth'

import './styles.css';

function ProfileCartorio () {

  const { signed, user, signOut } = useAuth(); 

  //console.log (signed);
  //console.log (user);

  function handleSignOut () {
    signOut();
  }

  return (
    <div className="profile-container">
      <header>        
        <h2 className="logo">Sistema de Consulta de Matrículas</h2>
      </header>

      <nav>
        <span>Bem vindo, {user.name}</span>
        <button title="Logout"  onClick={handleSignOut}> Sair </button>
      </nav>

      <Link className="button">
        Solicitar nova matrícula
      </Link>

      <div className="matriculasRecebidas">
        <h1>Matrículas recebidas</h1>
        <ul>
          <li>
            <strong>Livro</strong>
            <p>4324</p>

            <strong>Número de matrícula</strong>
            <p>47238947283</p>

            <strong>Cartório Responsável</strong> 
            <p> 42º Registro de matrícula XPTO</p>

            <button className="button" type="submit">
              Visualizar Matrícula
            </button>                    
          </li>

          <li>
            <strong>Livro</strong>
            <p>4324</p>

            <strong>Número de matrícula</strong>
            <p>47238947283</p>   

            <strong>Cartório Responsável</strong> 
            <p> 42º Registro de matrícula XPTO</p> 

            <button className="button" type="submit">
              Visualizar Matrícula
            </button>  

          </li>

        </ul>
      </div>

      <div className="matriculasPendentes">
        <h1>Solicitações pendentes</h1>
        <ul>
          <li>
            <strong>Livro</strong>
            <p>4324</p>

            <strong>Número de matrícula</strong>
            <p>47238947283</p>

            <strong>Cartório Responsável</strong> 
            <p> 42º Registro de matrícula XPTO</p>
            
          </li>

          <li>
            <strong>Livro</strong>
            <p>4324</p>

            <strong>Número de matrícula</strong>
            <p>47238947283</p>

            <strong>Cartório Responsável</strong> 
            <p> 42º Registro de matrícula XPTO</p>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default ProfileCartorio;
