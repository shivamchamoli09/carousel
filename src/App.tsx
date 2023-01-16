import React from "react";
import { Carousel, CarouselItem } from "./components";

export default function App() {
  return (
    // <div style={{ height: "200px", background: "red" }}>
      <Carousel
        infiniteSlide={false}
        autoSlide={false}
        autoSlideInterval={1000}
        pauseOnHover={true}
        showIndicators={true}
        //   leftIndicator={<LeftIndicator />}
        //   rightIndicator={<RightIndicator />}
        indicatorPosition={"1"}
        allowSwipe={true}
        rightIndicatorClass=""
        leftIndicatorClass=""
        tansition={0.5}
        hideIndicatorsByPosition={true}
      >
        <CarouselItem>
          <img src="/carousel1.jpg" />
        </CarouselItem>
        <CarouselItem>
          <img src="/carousel1.jpg" />
        </CarouselItem>
        <CarouselItem>
          <img src="/carousel1.jpg" />
        </CarouselItem>
        <CarouselItem>
          <img src="/carousel1.jpg" />
        </CarouselItem>
      </Carousel>
    // </div>
  );
}
