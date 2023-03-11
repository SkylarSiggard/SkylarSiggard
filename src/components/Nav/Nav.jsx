import './Nav';
import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div className="Nav">
            <Link to='/'></Link>
            <Link to='/Profile'>Profile</Link>
            <Link to='/Stack'>Stack</Link>
            <Link to='/Schooling'>Schooling</Link>
            <Link to='/Bootcamp'>Bootcamp</Link>
            <Link to='/ForFun'>For Fun</Link>
            <Link to='/Professional'>Professional</Link>
        </div>
    );
}