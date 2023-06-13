import React from 'react';
import '../styles/main.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <section>
      <div id="mainContentHome" className="mainContentsHome">
        <div className="content-inner">
          <div className="content-item" id="taspenHero">
            <img src={'https://www.bankmandiritaspen.co.id/storage/images/slider-banner/indonesia/9edccf16696c12550419add0a71d0783.jpg'} className="d-block w-100" alt="" />
          </div>
          <div class="content-item" id="ws">
            <img src={'https://www.bankmandiritaspen.co.id/asset/ws.png'} alt="" />
            <h1>KARIER</h1>
            <p>Dapatkan Pengalaman Kerja Bersama Bank Mandiri Taspen</p>
            <a className="btn-karier" target="blank" role="button" href="https://www.bankmandiritaspen.co.id/karir/id">
              Lihat lowongan
            </a>
          </div>
        </div>
      </div>
      <footer>
        <h1>CopyRight &copy; by Habibu</h1>
      </footer>
    </section>
  );
};

export default Home;
