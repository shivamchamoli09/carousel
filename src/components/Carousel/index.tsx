import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import LeftArrowIcon from "../../static/svgs/left_arrow";
import RightArrowIcon from "../../static/svgs/right_arrow";

const RightIndicator = ({ className }: { className: string }) => {
  return (
    <div className={`default-indicator ${className}`}>
      <RightArrowIcon />
    </div>
  );
};

const LeftIndicator = ({ className }: { className: string }) => {
  return (
    <div className={`default-indicator ${className}`}>
      <LeftArrowIcon />
    </div>
  );
};

const CarouselItem = (props: any) => {
  return (
    <div className="carousel-item" style={{ width: props?.width }}>
      {props?.children}
    </div>
  );
};

interface ICarousel {
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
}

const Carousel = (props: ICarousel) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const {
    leftIndicator = (
      <LeftIndicator className={props?.leftIndicatorClass || ""} />
    ),
    rightIndicator = (
      <RightIndicator className={props?.rightIndicatorClass || ""} />
    ),
    allowSwipe = false,
    indicatorPosition = "1",
  } = props;

  useEffect(() => {
    if (props?.autoSlide) {
      const interval = setInterval(() => {
        if (!paused) {
          updateIndex(activeIndex + 1);
        }
      }, props?.autoSlideInterval || 1000);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  });

  useEffect(() => {
    if (typeof props?.currentIndex === "number" && props?.currentIndex >= 0) {
      updateIndex(props.currentIndex);
    }
  }, [props.currentIndex]);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = props.infiniteSlide
        ? React.Children.count(props?.children) - 1
        : 0;
    } else if (newIndex >= React.Children.count(props?.children)) {
      newIndex = props?.infiniteSlide
        ? 0
        : React.Children.count(props?.children) - 1;
    }
    setActiveIndex(newIndex);
  };

  let handlers = {} as any;

  handlers = useSwipeable({
    onSwipedLeft: () => (allowSwipe ? updateIndex(activeIndex + 1) : () => {}),
    onSwiped: () => (allowSwipe ? updateIndex(activeIndex - 1) : () => {}),
  });

  const handleMouseHover = () => {
    if (props?.pauseOnHover) {
      setPaused(true);
    }
  };
  const handleMouseLeave = () => {
    if (props?.pauseOnHover) {
      setPaused(false);
    }
  };

  const getLeftIndicatorClass = (): string => {
    switch (indicatorPosition) {
      case "1":
        return "left-indicator";
      default:
        return "";
    }
  };

  const getRightIndicatorClass = (): string => {
    switch (indicatorPosition) {
      case "1":
        return "right-indicator";
      default:
        return "";
    }
  };

  const getIndicatorContainerClass = () => {
    switch (indicatorPosition) {
      case "3":
        return "bottom-inside-carousel";
      default:
        return "";
    }
  };

  return (
    <div
      className="carousel"
      {...handlers}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="inner"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: props?.tansition
            ? `transform ${props?.tansition}s`
            : `transform 0.5s`,
        }}
      >
        {React.Children.map(props?.children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      {props?.showIndicators && (
        <div
          id="indicators"
          className={`indicators ${getIndicatorContainerClass()}`}
        >
          <div
            className={`indicator-container ${getLeftIndicatorClass()}`}
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            {leftIndicator}
          </div>

          <div
            className={`indicator-container ${getRightIndicatorClass()} ${
              props?.rightIndicatorClass
            }`}
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            {rightIndicator}
          </div>
        </div>
      )}
    </div>
  );
};

export { Carousel, CarouselItem };
