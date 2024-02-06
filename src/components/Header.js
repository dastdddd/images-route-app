import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderRegister from './HeaderRegister';



const Header = () => {
  return (
    <div className="header-item">
      <div className='register'>
        <Link to={"/headerLogo"} className='login'> login</Link>
        <Link to={"/headerReg"} className='password'> Registr</Link>
      </div>
      <Routes>
        <Route path='/headerLogo' element={<HeaderLogo />}/>
        <Route path='/headerReg' element={<HeaderRegister />}/>
      </Routes>
    </div>

  );
};

export default Header;