import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Banner from './Banner/Banner';
import Text from './Text/Text';
import Buttom from './Buttom/Buttom';

const App = () => (
  <div>
    <Header />
    <Navigation />
    <Banner />
    <Text />
    <Buttom />
  </div>
);

export default App;