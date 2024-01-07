import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Button from './components/Button/Button';
// import Carousel from './components/Carousel/Carousel';

const App = () => (
  <div>
    <Header />
    <Navigation />
    <Banner />
    <Button />
    {/* <Carousel /> */}
  </div>
);

export default App;