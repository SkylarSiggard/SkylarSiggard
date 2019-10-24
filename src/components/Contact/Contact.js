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
              <p>siggardskylar@gmail.com</p>
            </div>
            <div className='contact-text'>
              <i class="fas fa-phone"></i>
              <p>(801) 557 - 0544</p>
            </div>
            <div className='contact-text'>
              <i class="fab fa-github"></i>
              <p>https://github.com/SkylarSiggard</p>
            </div>
            <div className='contact-text'>
              <i class="fab fa-linkedin-in"></i>
              <p>https://www.linkedin.com/in/skylar-siggard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;