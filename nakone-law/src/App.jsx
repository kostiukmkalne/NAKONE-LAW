import React from 'react';
import "./App.css";
import Header from './pages/components/Header/Header';
import Navigation from './pages/components/Navigation/Navigation';
import Banner from './pages/components/Banner/Banner';
import Button from './pages/components/Button/Button';
// import Slider from './pages/components/Slider/Slider';

import Services from './pages/Services/Services';
import Footer from './pages/Footer/Footer';

const App = () => (
  <div>
    <Header />
    <Navigation />
    <Banner />
    <Button />
    {/* <Slider /> */}

    <Services />
    <Footer />
  </div>
);

export default App;