import React from 'react';
import { Link } from 'react-router-dom';


const HeaderLogo = () => {
  return (
    <Link to="/">
      {/* to="/" - чтобы при клике др место исчезал */}
      <div className="modal">
        <div className="header-container">
          <h3 className="item-text">Вход в личный кабинет</h3>
          <input type="number" placeholder='Ведите номер тел.' />
          <input type="password" placeholder='Ведите номер тел.' />
          <button className='header-btn'>Войти</button>
        </div>
      </div>
    </Link>
  );
};

export default HeaderLogo;