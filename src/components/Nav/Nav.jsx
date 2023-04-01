import './Nav';
import './Nav.sass'
import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import Logo from '../Assets/Skylar/Skylar-Logo.PNG'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            ham: true
        }
    }
    clickHamburger() {
        const dropdown = document.querySelector('#dropdown')
        if (dropdown.classList.contains('hide')) {
            dropdown.classList.remove('hide')
            this.setState({
                ham: !this.state.ham
            })
        } else {
            dropdown.classList.add('hide')
            this.setState({
                ham: !this.state.ham
            })
        }
    }
    render() {
        return(
            <div className= "header">
                <div className='nav'>
                <img src={Logo} alt="My Logo"/>
                    <div onClick={() => this.clickHamburger()} className="hamburger fas fa-bars">
                        {this.state.ham ? <>
                            <div className="ham-container">
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                        </div>
                        </> :
                            <div className="ham-container">
                                <div className="bar4"></div>
                                <div className="bar5"></div>
                                <div className="bar6"></div>
                            </div>
                        }
                    </div>
                    <div className="one-more-div">
                        <div className="title-nav">
                            <nav className="nav-row">
                                <nav className="nav-list">
                                    <Link className='link-decoration1' to='/'>
                                        <li className='hover-test'>Profile</li>
                                    </Link>    
                                    <Link className="link-decoration1" to='/Education'>
                                        <li className='hover-test'>Education</li>
                                    </Link> 
                                    <Link className="link-decoration1" to='/Projects'>
                                        <li className='hover-test'>Projects</li>
                                    </Link>
                                    
                                </nav>
                            </nav>
                        </div>
                    </div>
                </div>
                <nav id='dropdown' className='hide dropdown'>
                    <Link className='link-decoration2' to='/'>
                        <li onClick={() => this.clickHamburger()}>Profile</li>
                    </Link>
                    <Link className="link-decoration2" to='/Education'>
                        <li onClick={() => this.clickHamburger()}>Education</li>
                    </Link> 
                    <Link className="link-decoration2" to='/Projects'>
                        <li onClick={() => this.clickHamburger()}>Projects</li>
                    </Link>
                </nav>
            </div>
        )
    }
}
export default Nav