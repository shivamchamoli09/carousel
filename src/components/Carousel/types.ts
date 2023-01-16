export interface ICarousel {
  currentIndex?: number;
  children: JSX.Element | JSX.Element[];
  infiniteSlide?: boolean;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  pauseOnHover?: boolean;
  showIndicators?: boolean;
  leftIndicatorClass?: string;
  rightIndicatorClass?: string;
  indicatorPosition?: "1" | "2" | "3";
  leftIndicator?: JSX.Element;
  rightIndicator?: JSX.Element;
  tansition?: string | number;
  allowSwipe?: boolean;
  rightIndicatorContainerClass?: string;
  leftIndicatorContainerClass?: string;
  hideIndicatorsByPosition?: boolean;
}
