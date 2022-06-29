import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CarouselItem, Carousel } from './components';

function App() {
  return (
    <Carousel infiniteSlide={false} autoSlide={false} autoSlideInterval={1000}
      pauseOnHover={true} showIndicators={true}
      rightIndicatorClass="fa-solid fa-angle-right"
      leftIndicatorClass="fa-solid fa-angle-left"
      tansition={0.5}
    >
      <CarouselItem>Item 1</CarouselItem>
      <CarouselItem>Item 2</CarouselItem>
      <CarouselItem>Item 3</CarouselItem>
    </Carousel>
  );
}

export default App;
