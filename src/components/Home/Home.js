import React from 'react';
import Nav from '../../components/Nav/Nav'
import Skylar from '../assets/skylar.JPG'
import './home.scss'

function Home() {
  return (
    <div id='home'>
      <Nav/>
      <div className='picture'>
        <div className='info'></div>
        <img className='skylar' src={Skylar} alt=""/>
      </div>
    </div>
  );
}

export default Home;