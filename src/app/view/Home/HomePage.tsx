import React from 'react';
import FindVideoservice from '../../domain/services/findVideosService';
import BodyPage from '../Home/Body/BodyPage';
import FooterPage from '../Home/Footer/FooterPage';
import HeaderPage from '../Home/Header/HeaderPage';
import './HomePage.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';

type Props = {
  service: FindVideoservice;
};

const HomePage: React.FC<Props> = ({ service }) => {
  return (
    <div className='background'>
      <BrowserRouter>
        <HeaderPage />
        <main className='background'>
          <div className='margin'>
            <Routes>
              <Route path='/login/*' element={<Login />} />
              <Route path='/' element={<BodyPage service={service} />} />
            </Routes>
          </div>
        </main>
        <FooterPage />
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
