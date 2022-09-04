# Simple carousel for react.

```
    import {Carousel, CarouselItem } from '@shivamchamoli1997/carousel/dist';

    <Carousel infiniteSlide={false} autoSlide={false} autoSlideInterval={1000}
      pauseOnHover={true} showIndicators={true}
      rightIndicatorClass="fa-solid fa-angle-right"
      leftIndicatorClass="fa-solid fa-angle-left"
      tansition={0.5}>
      <CarouselItem>Item 1</CarouselItem>
      <CarouselItem>Item 2</CarouselItem>
      <CarouselItem>Item 3</CarouselItem>
    </Carousel>
```

Note - You need to import carousel css from root app:-
import '@shivamchamoli1997/carousel/dist/index.css';


## Carousel properties:
###    currentIndex?: number // current index of slide
###    infiniteSlide?: boolean; // allow to infinitely slide
###    autoSlide?: boolean;     // allow auto slide of items
###    autoSlideInterval?: number;  // give auto slide interval time
###    pauseOnHover?: boolean;  //  allow pause of active slide if autoslide is true
###    showIndicators?: boolean;    //allow indicators
###    leftIndicatorClass?: string; //left indicator class to add. can add custom classes as well.
###    rightIndicatorClass?: string;    // right indicator class
###    tansition?: string | number  //transition time between slide change

Note: Indicators: leftIndicatorClass && rightIndicatorClass takes fontawesome classes to add icons from
font awesome library. If provided, you need to import or call fontawsome cdn css link to display icons
##### eg.   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" /> 
 