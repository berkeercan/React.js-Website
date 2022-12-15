import React,{ useRef,useEffect } from 'react';
import logo from './resources/logo.svg';
import discord from './resources/discord.png';
import eagle from './resources/eagle1.png';
import login from './resources/users.png';

import './css/app.css';
import './css/header.css';
import './css/orta.css';


 

 
  

function App() {
  
  return (
    
    <div className="App">
      <div class="screen1">
        <div class="header">
          <div class="logo">
            <a class="menu-logo"href="#">
              <div class="logo_main">
                <div class="logo_foto">
                 <img src={logo} alt="Logo"></img>
                </div>
                <div class="logo_yazi">
                  <h2>DeSanta Bot</h2>
                </div>
              </div>
            </a>
          </div>
          <nav class="nav">
            <ul class="nav-items">
              <li id="menu-lightdark">
                <div id="toggle-button">
                Açık
                  </div>
              </li>
              <li class="nav-text">
                <a class="menu-items"href="#">Anasayfa</a>
              </li>
              <li class="nav-text">
                <a class="menu-items"href="#">Hakkımızda</a>
              </li>
              <li class="nav-text">
                <a class="menu-items"href="#">Komutlar</a>
              </li>
              <li class="nav-login">
                <a class="menu-items"href="#"><img class="img_login"src={login}></img></a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="orta">
          <div class="eagle">
            <img class="maskot" src={eagle} ></img>
          </div>
          <a class="but" href="https://discord.com/api/oauth2/authorize?client_id=449845202132140042&permissions=8&scope=bot">
            <div class="button">
               <img  class ="dc_img"src={discord}height="50" width="65"></img>
               <p class="dc_p">Discord'a Katıl</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    
  );
  
}

export default App;
