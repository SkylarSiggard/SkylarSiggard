import './App.sass';
import React, { Component } from 'react'
import routes from './routes'
import Nav from './components/Nav/Nav'
import January from './components/Assets/Months/January.jpg'
import Febuary from './components/Assets/Months/Febuary.jpg'
import March from './components/Assets/Months/March.jpg'
import April from './components/Assets/Months/April.jpg'
import May from './components/Assets/Months/May.jpg'
import June from './components/Assets/Months/June.jpg'
import July from './components/Assets/Months/July.jpg'
import August from './components/Assets/Months/August.jpg'
import September from './components/Assets/Months/September.jpg'
import October from './components/Assets/Months/October.jpg'
import November from './components/Assets/Months/November.jpg'
import December from './components/Assets/Months/December.jpg'
import Hacked from './components/Assets/Months/Hacked.jpg'

//! npm run deploy

export default class App extends Component {
    constructor(){
        super()
        var today = new Date();
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var mmNum = Number(mm)
        this.state = {
            date: mmNum,
            color: '',
            font: ''
        }
    }
    month = (date) => {
        if (date === 1){return January;} 
        else if (date === 2) { return Febuary;}
        else if (date === 3) { return March;}
        else if (date === 4) { return April;}
        else if (date === 5) { return May;}
        else if (date === 6) { return June;}
        else if (date === 7) { return July;}
        else if (date === 8) { return August;}
        else if (date === 9) { return September;}
        else if (date === 10) { return October;}
        else if (date === 11) { return November;}
        else if (date === 12) { return December;}
        else return Hacked;
    }

    render = () => {
        return ( 
        <div className='Background'  style={{backgroundImage: `url(${this.month(this.state.date)})`}}>
            <Nav/>
            {routes}
        </div>
        )
    }
}