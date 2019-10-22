import React from 'react';
import Nav from '../Nav/Nav'
import './stack.scss'
import html from './../assets/html.png'
import css3 from './../assets/css3.png'
import javascript from './../assets/javascript.png'
import react from './../assets/react.png'
import nodejs from './../assets/nodejs.png'


function Stack() {
  return (
    <div id='stack'>
      <Nav/>
      <div className='skill-container'>
        <div className='skills'>
        <i className="devicon-sass-original colored"></i>
        <img src={nodejs} alt="nodejs logo"/>
        <img src={react} alt="react logo"/>
        <img src={javascript} alt="javascript logo"/>
        <i className="devicon-postgresql-plain colored"></i>
        <i className="devicon-git-plain colored"></i>
        <img src={css3} alt="css3 logo"/>
        <img src={html} alt="html logo"/>
        </div>
      </div>
    </div>  
  );
}

export default Stack;