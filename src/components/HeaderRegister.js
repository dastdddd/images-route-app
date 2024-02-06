import React from 'react';
import { Link } from 'react-router-dom';

const HeaderRegister = () => {
  return (
    <Link to="/">
      <div className="modal">
        <div className="header-container">
          <h3 className="item-text">Регистрация аккаунта</h3>
          <input type="text" placeholder='Фамилия' />
          <input type="text" placeholder='Имя' />
          <input type="number" placeholder='Дата рождения' />
          <input type="text" placeholder='Email' />
          <button className='header-btn'>Регистрация</button>
        </div>
      </div>
    </Link>
  );
};

export default HeaderRegister;