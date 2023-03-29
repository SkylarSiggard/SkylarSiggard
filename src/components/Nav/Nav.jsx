import './Nav';
import './Nav.sass'
import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import Logo from '../Assets/Skylar/Skylar-Logo.PNG'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            navBar: null
        }
    }
    render() {
        return(
            <div className= "header">
                <div className='nav'>
                <img src={Logo} alt="My Logo"/>
                </div>
            </div>
        )
    }
}
export default Nav