
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Stack from './components/Stack/Stack'
import Schooling from './components/Schooling/Schooling'
import Bootcamp from './components/Bootcamp/Bootcamp'
import Hacked from './components/Hacked/Hacked'
import Projects from './components/Projects/Projects'


export default (   
    <Routes>
        <Route path='/SkylarSiggard' element={<Profile/>}/>
        <Route path='/SkylarSiggard/Stack' element={<Stack/>}/>
        <Route path='/SkylarSiggard/Schooling' element={<Schooling/>}/>
        <Route path='/SkylarSiggard/Bootcamp' element={<Bootcamp/>}/>
        <Route path='/SkylarSiggard/Hacked' element={<Hacked/>}/>
        <Route path='/SkylarSiggard/Projects' element={<Projects/>}/>
    </Routes>
)