import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

import Services from './pages/Services/Services';
import Achivements from './pages/Achivements/Achivements';
import Partners from './pages/Partners/Partners';
import About from './pages/About/About';
import Feedback from './pages/Feedback/Feedback';
import Booking from './pages/Booking/Booking';
import Blog from './pages/Blog/Blog';
import Location from './pages/Location/Location';


const App = () => (
  <div>
    <Header />
    <Banner />

    <Services />
    <Achivements />
    <Partners />
    <About />
    <Feedback />
    <Booking />
    <Blog />
    <Location />

    <Footer />
  </div>
);


export default App;