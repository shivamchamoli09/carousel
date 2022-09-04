import React, { useEffect, useState } from "react";
import { CarouselItem, Carousel } from "./components";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    if (currentIndex < 2) {
      setCurrentIndex((prev: number) => prev + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev: number) => prev - 1);
    }
  }

  return (
    <Carousel
      infiniteSlide={false}
      autoSlide={false}
      autoSlideInterval={1000}
      pauseOnHover={true}
      showIndicators={true}
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
