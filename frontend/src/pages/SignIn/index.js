import React, { useState } from 'react';
import {useAuth} from '../../contexts/auth'


import './styles.css';

export default function SignIn() {

  const { signed, user, signIn } = useAuth();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  async function handleSignIn(e) {
    e.preventDefault();

    try {
      //const response = await api.post('sessions', { email });

      signIn();
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="login-container">
    <section className="form">

        <form onSubmit = { handleSignIn } >
          <h1>Sistema de Consulta de Matrículas</h1>

          <input 
            placeholder = "E-mail" 
            type = "email"
            value = {email} 
            onChange = {e => setEmail(e.target.value) }
          />

          <input 
            placeholder = "Senha" 
            type = "password"
            value = {password}
            onChange = {e => setPassword(e.target.value) }
          />

          <button className="button" type="submit">Entrar</button>

        </form>

        <button className="button">Cadastrar-se</button>

        <button className="buttonClean">Sobre nós</button>

    </section>

  </div>
  )

};