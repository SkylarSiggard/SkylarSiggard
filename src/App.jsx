import './App.css';
import React from 'react';
import routes from './routes'
import Nav from './components/Nav/Nav'

export default function App() {
  return (
    <div>
      <Nav/>
      {routes}
    </div>
  );
}
