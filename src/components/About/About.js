import React from 'react';
import Nav from '../../components/Nav/Nav'
import './about.scss'
import skylarAbout from '../assets/skylarabout.JPG'

function About() {
  return (
    <div id='about'>
      <Nav/>
      <div className='about-box'>
        <div className='about-picture'>
          <img className='about-skylar' src={skylarAbout} alt=""/>
        </div>
        <div className='about-me'>
          <div className='about-text'>
            <p>Hi, I'm Skylar...</p>
            <p>Soon after graduating with Bachelor's degrees in Criminal Justice, I realized my dream of going</p>
            <p> into the FBI would be too hard on my family.</p>
            <p>I decided to try different options before submittin my resume to the FBI. This is went i </p>
            <p> with coding and community surrounding the</p>
            <p>fell in love tech world. I fell in love with finding solutions and working through complex</p>
            <p>problems. When I'm not coding I enjoy playing video games, snowboarding, and being</p>
            <p>outdoors. If you have any questions please don't hesitate to get in touch! </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;