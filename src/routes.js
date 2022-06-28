
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Stack from './components/Stack/Stack'
import Schooling from './components/Schooling/Schooling'
import Bootcamp from './components/Bootcamp/Bootcamp'
import Fun from './components/ForFun/ForFun'
import Professional from './components/Professional/Professional'


export default (   
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Stack' element={<Stack/>}/>
        <Route path='/Schooling' element={<Schooling/>}/>
        <Route path='/Bootcamp' element={<Bootcamp/>}/>
        <Route path='/ForFun' element={<Fun/>}/>
        <Route path='/Professional' element={<Professional/>}/>
    </Routes>
)