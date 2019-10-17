import React from 'react';
import './nav.scss'


function Nav() {
  return (
    <div className="nav">
      <ul>
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
    </div>
  );
}

export default Nav;