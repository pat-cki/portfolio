import React from 'react';
import './Cssreset.css'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Stack from './components/Stack/Stack'
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <div className="container">
        <Navigation/>
        <Header/>
        <Projects/>
        <Stack/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
