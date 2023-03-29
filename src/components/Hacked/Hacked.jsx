import './Hacked';
import './Hacked.sass';
import React, { Component } from 'react'

export default class Hacked extends Component {
    constructor(){
        super()
        this.state = {
            date: ''
        }
    }

    handleHacked = (e) => {
        this.setState({
            date: e
        })
    }

    render = () => {
        return ( 
        <div className='Hacked'>
            <h1>I am planning on making this page a fun way to hack my page</h1>
        </div>
        )
    }
}