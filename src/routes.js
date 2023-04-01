
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Education from './components/Education/ Education'
import Hacked from './components/Hacked/Hacked'
import Projects from './components/Projects/Projects'


export default (   
    <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Hacked' element={<Hacked/>}/>
        <Route path='/Projects' element={<Projects/>}/>
    </Routes>
)