import React from 'react';
import logo from './logo.svg';
import './Cssreset.css'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Projects/>
    </div>
  );
}

export default App;
