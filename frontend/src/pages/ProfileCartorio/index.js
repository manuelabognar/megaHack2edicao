import React from 'react';
import {useAuth} from '../../contexts/auth'

import './styles.css';

function ProfileCartorio () {

  const { signed, user, signOut } = useAuth(); 

  //console.log (signed);
  //console.log (user);

  function handleSignOut () {
    signOut('cartorio');
  }

  return (
    <div className="profile-container">
      <header>

        <h2>Logo</h2>
        <span>Bem vindo cartório: {user.name}</span>


        
        <button title="Logout" onClick={handleSignOut}> Logout </button>

      </header>

      <h1>Solicitações pendentes</h1>

      <ul>
          <li>

            <div className="item">
              <strong>NOME</strong>
              <p>teste</p>

              <strong>DESCRIÇÃO</strong>
              <p>dhasud</p>

              <strong>VALOR</strong>
              <p>hdausdhuas</p>
            </div>
            
            <div className="item">
            Enviar matrícula
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCartorio;
