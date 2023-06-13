import React from 'react';
import '../styles/main.css';

const Navbar = () => {
  return (
    <header>
      <div className="headerInner">
        <img src={'https://www.bankmandiritaspen.co.id/asset/logo_mantap.png'} className="headerLogo" alt="logo" />
        <button id="menu" class="headerMenu" href="#drawer.open">
          ☰
        </button>
        <nav className="navbar" id="navbar">
          <ul className="nav">
            <a href="/">Home</a>
            <a href="#ws">Karier</a>
            <a href="/add">Absensi</a>
          </ul>
        </nav>
      </div>
      <div id="drawer">
        <ul>
          <li className="drawerItem">
            <a href="/">Home</a>
          </li>
          <li className="drawerItem">
            <a href="#/about-us">About Us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
