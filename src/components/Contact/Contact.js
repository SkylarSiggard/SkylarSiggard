import React from 'react';
import Nav from '../../components/Nav/Nav'
import './contact.scss'

function Contact() {
  return (
    <div id='contact'>
      <Nav/>
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='contact-logo'>
            <div className='contact-text'>
              <i class="far fa-envelope"></i>
              <h1>siggardskylar@gmail.com</h1>
            </div>
            <div className='contact-text'>
              <i class="fas fa-phone"></i>
              <h1>(801) 557 - 0544</h1>
            </div>
            <div className='contact-text'>
              <i class="fab fa-github"></i>
              <h1>https://github.com/SkylarSiggard</h1>
            </div>
            <div className='contact-text'>
              <i class="fab fa-linkedin-in"></i>
              <h1>https://www.linkedin.com/in/skylar-siggard</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;