import React from 'react';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Stack from './components/Stack./Stack'
import './App.scss'

function App() {
  return (
    <div className="nav">
      <Home/>
      <About/>
      <Projects/>
      <Stack/>
      <Contact/>
    </div>
  );
}

export default App;
