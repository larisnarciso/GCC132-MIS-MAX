import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderPage.css';

const HeaderPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} `}>
      <nav className={`nav container `}>
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
