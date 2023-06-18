import React from 'react';
import '../header.css';
import Logo from '../imgs/ICONE.png';

const Header: React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <main>
          <img src={Logo} alt="Logo" className='logo'/>
          <h1 className='logoname1'>Port</h1><h1 className='logoname'>Pedro</h1>
        </main>
      </header>
    </div>
  );
};

export default Header;
