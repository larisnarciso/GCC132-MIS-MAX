import React from 'react';
import './HeaderPage.css';

const HeaderPage: React.FC = () => {
  const handleOnClick = () => {
    window.location.reload();
  };

  return (
    <div className='header-container' onClick={handleOnClick}>
      <img
        src={require('../../../../assets/logo.png')}
        className='header-logo'
      />
    </div>
  );
};

export default HeaderPage;
