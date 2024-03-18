import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  return (
    <section className='login-container'>
      <div>
        <h1 className='login-titulo'>Começar</h1>
      </div>
      <div className='login-form-container'>
        <div className='login-form'>
          <div className='form'>
            <h2 className='form-titulo'>Entrar</h2>
            <p className='form-paragrafo'>
              Digite o endereço de e-mail e a senha da sua conta MIS Max.
            </p>
          </div>
          <div className='input-container'>
            <div>
              <label>Endereço de e-mail</label>
              <input type='email' name='username' className='input-field' />
            </div>
            <div>
              <label>Senha</label>
              <input type='password' name='password' className='input-field' />
            </div>
            <div>
              <Link className='login-button' to='/'>
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
