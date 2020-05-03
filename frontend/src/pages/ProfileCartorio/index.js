import React from 'react';
import {useAuth} from '../../contexts/auth'

import './styles.css';

function ProfileCartorio () {

  const { user, signOut } = useAuth(); 

  //console.log (signed);
  //console.log (user);

  function handleSignOut () {
    signOut();
  }

  async function handleSendMatricula(e) {
    e.preventDefault();

    try {
      //...

      alert('Enviado com sucesso');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="profile-container">
      <header>        
        <h2 className="logo">Sistema de Consulta de Matrículas</h2>
      </header>

      <nav>
        <span>Bem vindo cartório: {user.name}</span>
        <button title="Logout"  onClick={handleSignOut}> Sair </button>
      </nav>

      <h1>Solicitações pendentes</h1>
      <ul>
        <li>
          <form onSubmit={handleSendMatricula}>
            <strong>Livro</strong>
            <p>4324</p>

          <strong>Número de matrícula</strong>
            <p>47238947283</p>

            <input name="file" 
              type="file" 
              accept="application/pdf"
            />  

            <button className="button" type="submit">
              Enviar matrícula
            </button>  
          </form>     
        </li>


        <li>
          <form onSubmit={handleSendMatricula}>
            <strong>Livro</strong>
            <p>4324</p>

          <strong>Número de matrícula</strong>
            <p>47238947283</p>

            <input name="file" 
                type="file" 
                accept="application/pdf"
              /> 

            <button className="button" type="submit">
              Enviar matrícula
            </button>  
          </form>
          
                
        </li>

      </ul>
    </div>
  );
}

export default ProfileCartorio;
