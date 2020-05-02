import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      email,
      password,
      passwordConfirm
    };

    try {
      //const response = await api.post('users', data);
      
      //alert('Cadastro efetuado com sucesso');
      
      history.push('/');

    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h2 className="logo">Sistema de Consulta de Matrículas</h2>

            <h1>Cadastro de usuários</h1>
            <p>
              Cadastre-se e tenha acesso rápido e fácil a 
              documentos de cartórios.
            </p>

            <Link className="back-link" to="/">
              Voltar
            </Link>
        </section>

        <form onSubmit={ handleRegister } >

          <input 
            type="email" 
            placeholder="E-mail" 
            type="email"
            value = {email} 
            onChange = {e => setEmail(e.target.value) }  
          />

          <input 
            placeholder="Senha" 
            type="password"
            value = {password} 
            onChange = {e => setPassword(e.target.value) }  
          />

          <input 
            placeholder="Senha" 
            type="password"
            value = {passwordConfirm} 
            onChange = {e => setPasswordConfirm(e.target.value) }  
          />
          

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}