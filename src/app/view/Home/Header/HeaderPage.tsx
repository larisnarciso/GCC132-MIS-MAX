import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './HeaderPage.css';

const HeaderPage: React.FC = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <Link className='logo' to='/'>
          <img src={require('../../../../assets/logo.png')} alt='Logo' />
        </Link>
        <Link className='login' to='/login'>
          Login
        </Link>
      </nav>
    </header>
  );
};

export default HeaderPage;
