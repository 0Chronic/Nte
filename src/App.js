import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Hero></Hero>
     <HeadlineCards></HeadlineCards>
     <Food></Food>
     <Category></Category>
    </div>
  );
}

export default App;
