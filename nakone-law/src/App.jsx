import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Button from './components/Button/Button';
import Slider from './components/Slider/Slider';
import Card from './components/Card/Card';

import Services from './pages/Services/Services';
import Achivements from './pages/Achivements/Achivements';
import About from './pages/About/About';
import Feedback from './pages/Feedback/Feedback';
import Booking from './pages/Booking/Booking';
import Blog from './pages/Blog/Blog';
import Location from './pages/Location/Location';
import Footer from "./components/Footer/Footer";

const App = () => (
  <div>
    <Header />
    <Navigation />
    <Banner />
    <Button />
    <Slider />
    <Card />

    <Services />
    <Achivements />
    <About />
    <Feedback />
    <Booking />
    <Blog />
    <Location />

    <Footer />
  </div>
);

export default App;