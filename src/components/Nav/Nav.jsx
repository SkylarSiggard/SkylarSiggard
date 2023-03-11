import './Nav';
import './Nav.sass'
import React , {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    clickHamburger() {
        const dropdown = document.querySelector('#dropdown')
        if (dropdown.classList.contains('hide')) {
            dropdown.classList.remove('hide')
        } else {
            dropdown.classList.add('hide')
        }
    }
    render() {
        return(
            <div className= "header">
                <div className='nav'>
                    <i onClick={() => this.clickHamburger()} className="hamburger fas fa-bars">Will be icon</i>
                    <div className="one-more-div">
                        <div className="title-nav">
                            <nav className="nav-row">
                                <nav className="nav-list">
                                    <Link className='link-decoration' to='/'>
                                        <li className='hover-test'>Profile</li>
                                    </Link>    
                                    <Link className='link-decoration' to='/Stack'>
                                        <li className='hover-test'>Stack</li>
                                    </Link>
                                    <Link className="link-decoration" to='/Schooling'>
                                        <li>Schooling</li>
                                    </Link> 
                                    <Link className="link-decoration" to='/Bootcamp'>
                                        <li className='hover-test'>Bootcamp</li>
                                    </Link>
                                    <Link className="link-decoration" to='/Professional'>
                                        <li className='hover-test'>Professional</li>
                                    </Link>
                                    
                                </nav>
                            </nav>
                        </div>
                    </div>
                </div>
                <nav id='dropdown' className='hide dropdown'>
                    <Link className='link-decoration' to='/'>
                        <li onClick={() => this.clickHamburger()}>Profile</li>
                    </Link>
                    <Link className='link-decoration' to='/Stack'>
                        <li onClick={() => this.clickHamburger()}>Stack</li>
                    </Link>
                    <Link className="link-decoration" to='/Schooling'>
                        <li onClick={() => this.clickHamburger()}>Schooling</li>
                    </Link> 
                    <Link className="link-decoration" to='/Bootcamp'>
                        <li onClick={() => this.clickHamburger()}>Bootcamp</li>
                    </Link>
                    <Link className="link-decoration" to='/Professional'>
                        <li onClick={() => this.clickHamburger()}>Professional</li>
                    </Link>
                </nav>
            </div>
        )
    }
}
export default Nav