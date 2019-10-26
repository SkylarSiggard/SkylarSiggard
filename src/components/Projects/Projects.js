import React from 'react';
import Nav from '../../components/Nav/Nav'
import sandman from '../assets/Sandman.PNG'
import text from '../assets/text.jpg'
import './projects.scss'

function Projects() {
  return (
    <div id='projects'>
      <Nav/>
      <div className="container-projects">
        <div className='projects-sandman'>
          <div className='images'>
            <img className='sandman-img' src={sandman} alt="my website"/>
            <img className='text-img'src={text} alt="example text"/>
          </div>
          <div className='sandman-discription'>
            <h3>Reminder App</h3>
            <p>My goal with this project was to learn how to use cron jobs to create a reminder app. Once I learned cron I used them to maintain my database, send messages through twillio, and maintain other pending cron jobs.</p>
            <p>Built with: SASS, Twillio, Cron, Moment, JavaScript, HTML, and PostgreSQL</p>
            <a href={'https://sandmanevents.com/#/'}><h6>https://sandmanevents.com/#/</h6></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;