# Simple carousel for react.
#### https://www.npmjs.com/package/@shivamchamoli1997/carousel

```
    import {Carousel, CarouselItem } from '@shivamchamoli1997/carousel';

    <Carousel infiniteSlide={false} autoSlide={false} autoSlideInterval={1000}
      pauseOnHover={true} showIndicators={true}
      leftIndicator={<LeftIndicator />}
      rightIndicator={<RightIndicator />}
      indicatorPosition={'1'}
      allowSwipe={true}
      rightIndicatorClass=""
      leftIndicatorClass=""
      tansition={0.5}>
      <CarouselItem>Item 1</CarouselItem>
      <CarouselItem>Item 2</CarouselItem>
      <CarouselItem>Item 3</CarouselItem>
    </Carousel>
```

Note - You need to import carousel css from root app:-
#### import '@shivamchamoli1997/carousel/dist/index.css';

## Carousel properties:

##### currentIndex: number -> current index of slide

##### infiniteSlide: boolean -> allow to infinitely slide

##### autoSlide: boolean -> allow auto slide of items

##### autoSlideInterval: number -> give auto slide interval time

##### pauseOnHover: boolean -> allow pause of active slide if autoslide is true

##### showIndicators: boolean -> allow default indicators

##### indicatorPosition: '1' | '2' | '3' -> set indicators position. default is '1'

##### leftIndicator: JSX.Element -> set the left indicator with the react element

##### rightIndicator: JSX.Element -> set the right indicator with the react element

##### leftIndicatorClass?: string -> left indicator class set to parent left indicator element if provided.

##### rightIndicatorClass?: string -> right indicator class set to parent right indicator element if provided

##### tansition?: string | number -> transition time between slide change

##### allowSwipe: boolean -> set true to allow swipe effect in carousel
