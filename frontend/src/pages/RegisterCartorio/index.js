import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function RegisterCartorio() {
  const [nome, setNome] = useState('');
  const [pj, setPj] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

      /*
    const data = {
      nome
      pj,
      email,
      cep,
      city,
      uf,
      street,
      number,
      password,
    };
    */

    try {
      //const response = await api.post('users', data);
      
      alert('Cadastro efetuado com sucesso');
      
      
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="SCM"></img>

          <h1>Cadastro de cartórios</h1>
          <p>
            Cadastre-se, e facilite o envio de documentos de 
            forma econômica, online e segura
          </p>

          <Link className="back-link" to="/cartorio">
            Voltar
          </Link>
        </section>


        <form onSubmit={ handleRegister } >

          <input
            placeholder="Nome completo" 
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <input 
            placeholder="CPF/CNPJ" 
            value = {pj} 
            onChange = {e => setPj(e.target.value) }  
          />

          <input 
            type="email" 
            placeholder="E-mail" 
            value = {email} 
            onChange = {e => setEmail(e.target.value) }  
          />


          <input 
            placeholder="CEP" 
            value = {cep} 
            onChange = {e => setCep(e.target.value) }  
          />

          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value = {city} 
              onChange = {e => setCity(e.target.value) }  
            />

            <input 
              placeholder="UF" 
              style={{ width: 120 }} 
              value = {uf} 
              onChange = {e => setUf(e.target.value) }  
            />
          </div>

          <div className="input-group">
            <input 
                placeholder="Rua" 
                value = {street} 
                onChange = {e => setStreet(e.target.value) }  
              />

            <input 
              placeholder="numero" 
              style={{ width: 120 }} 
              value = {number} 
              onChange = {e => setNumber(e.target.value) }  
            />
          </div>

          <input 
            placeholder="Senha" 
            type="password"
            value = {password} 
            onChange = {e => setPassword(e.target.value) }  
          />
          


          <button className="button" type="submit">Cadastrar</button>
        </form>
        
      </div>
    </div>
  );
}