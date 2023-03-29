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
        } else {
            dropdown.classList.add('hide')
        }
    }
    changeIcon(){
        this.setState({
            ham: !this.state.ham
        })
    }
    render() {
        return(
            <div className= "header">
                <div className='nav'>
                <img src={Logo} alt="My Logo"/>
                    <div onClick={() => this.clickHamburger()} className="hamburger fas fa-bars">
                        {this.state.ham ? <>
                            <div className="container" onClick={() => this.changeIcon()}>
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                        </div>
                        </> :
                            <div className="container" onClick={() => this.changeIcon()}>
                                <div class="bar4"></div>
                                <div class="bar5"></div>
                                <div class="bar6"></div>
                            </div>
                        }
                    </div>
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
                                    <Link className="link-decoration" to='/Projects'>
                                        <li className='hover-test'>Projects</li>
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