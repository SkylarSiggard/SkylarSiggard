import React from 'react';
import './nav.scss'
import sig from '../assets/sig.png'

function Nav() {
  return (
    <div>
      <body>
        <div className='container'>
        <nav className='nav'>
        <ul>
        <img className='logo' src={sig} alt="a logo with sig"/>
        <a href='#home'>
            <li>Home</li>
        </a>
        <a href='#about'>
            <li>About</li>
        </a>
        <a href='#projects'>
            <li>Projects</li>
        </a>
        <a href='#stack'>
            <li>Stack</li>
        </a>
        <a href='#contact'>
            <li>Contact</li>
        </a>
        </ul>
        </nav>
        </div>
      </body>
    </div>
  );
}

export default Nav;