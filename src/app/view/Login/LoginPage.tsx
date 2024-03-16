import React from 'react';
import FindVideoservice from '../../domain/services/findVideosService';
import BodyPage from '../Home/Body/BodyPage';
import LoginBody from '../Login/LoginBody';
import FooterPage from '../Home/Footer/FooterPage';
import HeaderPage from '../Home/Header/HeaderPage';
import './LoginPage.css';

type Props = {
  service: FindVideoservice;
};

const LoginPage: React.FC<Props> = () => {
  return (
    <div className='backgrond-login'>
      <HeaderPage />
      <LoginBody />
      <FooterPage />
    </div>
  );
};

export default LoginPage;
