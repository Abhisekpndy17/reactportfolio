import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </div>
    </BrowserRouter>
  )
}
