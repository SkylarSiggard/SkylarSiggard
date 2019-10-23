import React from 'react';
import Nav from '../../components/Nav/Nav'
import Skylar from '../assets/skylar.JPG'
import './home.scss'

function Home() {
  return (
    <div id='home'>
      <Nav/>
      <div className='picture'>
        <div className='info'>
          <h1>Welcome to my page.</h1>
          <h1>My name is</h1>
          <h1>Skylar Siggard</h1>
        </div>
        <div className='boder-pic'>
        <img className='skylar' src={Skylar} alt="a picture of skylar"/>
        </div>  
      </div>
    </div>
  );
}

export default Home;