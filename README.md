# Simple carousel for react.

```
    import Carousel, { CarouseItem } from '@shivamchamoli1997/carousel';

    <Carousel infiniteSlide={false} autoSlide={false} autoSlideInterval={1000}
      pauseOnHover={true} showIndicators={true}
      rightIndicatorClass="fa-solid fa-angle-right"
      leftIndicatorClass="fa-solid fa-angle-left"
      tansition={0.5}>
      <CarouseItem>Item 1</CarouseItem>
      <CarouseItem>Item 2</CarouseItem>
      <CarouseItem>Item 3</CarouseItem>
    </Carousel>
```

## Carousel properties:
###    infiniteSlide?: boolean; // allow to infinitely slide
###    autoSlide?: boolean;     // allow auto slide of items
###    autoSlideInterval?: number;  // give auto slide interval time
###    pauseOnHover?: boolean;  //  allow pause of active slide if autoslide is true
###    showIndicators?: boolean;    //allow indicators
<!-- 
Indicators: leftIndicatorClass && rightIndicatorClass takes fontawesome classes to add icons from
font awesome library. If provided, you need to import or call fontawsome cdn css link to display icons
eg.   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" /> 
 -->
###    leftIndicatorClass?: string; //left indicator class to add. can add custom classes as well.
###    rightIndicatorClass?: string;    // right indicator class
###    tansition?: string | number  //transition time between slide change