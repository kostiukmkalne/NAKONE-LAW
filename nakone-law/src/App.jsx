import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
// import Carousel from './components/Carousel/Carousel';

const App = () => (
  <div>
    <Header phoneNumber="+1 (847) 391-1008" />
    <Banner />
    {/* <Carousel /> */}
  </div>
);

export default App;