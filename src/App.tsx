import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CarouseItem, Carousel } from './components';

function App() {
  return (
    <Carousel infiniteSlide={false} autoSlide={false} autoSlideInterval={1000}
      pauseOnHover={true} showIndicators={true}
      rightIndicatorClass="fa-solid fa-angle-right"
      leftIndicatorClass="fa-solid fa-angle-left"
      tansition={0.5}
    >
      <CarouseItem>Item 1</CarouseItem>
      <CarouseItem>Item 2</CarouseItem>
      <CarouseItem>Item 3</CarouseItem>
    </Carousel>
  );
}

export default App;
