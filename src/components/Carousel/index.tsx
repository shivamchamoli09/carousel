import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './carousel.css';

const CarouseItem: React.FC<any> = (props: any) => {
    return (
        <div className='carousel-item' style={{ width: props?.width }}>
            {props?.children}
        </div>
    )
}

interface ICarousel {
    children: JSX.Element;
    infiniteSlide?: boolean;
    autoSlide?: boolean;
    autoSlideInterval?: number;
    pauseOnHover?: boolean;
    showIndicators?: boolean;
    leftIndicatorClass?: string;
    rightIndicatorClass?: string;
    tansition?: string | number
}

const Carousel: React.FC<any> = (props: ICarousel) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (props?.autoSlide) {
            const interval = setInterval(() => {
                if (!paused) {
                    updateIndex(activeIndex + 1);
                }
            }, props?.autoSlideInterval || 1000);

            return () => {
                if (interval) {
                    clearInterval(interval)
                }
            }
        }
    })

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = props.infiniteSlide ? React.Children.count(props?.children) - 1 : 0;
        } else if (newIndex >= React.Children.count(props?.children)) {
            newIndex = props?.infiniteSlide ? 0 : React.Children.count(props?.children) - 1;
        }
        setActiveIndex(newIndex);
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwiped: () => updateIndex(activeIndex - 1)
    })

    const handleMouseHover = () => {
        if (props?.pauseOnHover) {
            setPaused(true);
        }
    }
    const handleMouseLeave = () => {
        if (props?.pauseOnHover) {
            setPaused(false);
        }
    }

    return <div className='carousel' {...handlers}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}>
        <div className='inner'
            style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: props?.tansition ? `transform ${props?.tansition}s` : `transform 0.5s`
            }}>
            {React.Children.map(props?.children, (child, index) => {
                return React.cloneElement(child, { width: '100%' })
            })}
        </div>
        {
            props?.showIndicators && (<div className='indicators'>
                {props?.leftIndicatorClass?.length ? (
                    <div className='indicator-container'>
                        <i onClick={() => { updateIndex(activeIndex - 1) }}
                            className={`icon fas ${props?.leftIndicatorClass}`}></i></div>
                ) : (
                    <button onClick={() => { updateIndex(activeIndex - 1) }}>Prev</button>
                )}
                {props?.rightIndicatorClass?.length ?
                    <div className='indicator-container'>
                        <i onClick={() => { updateIndex(activeIndex + 1) }}
                            className={`icon fas ${props?.rightIndicatorClass}`}></i></div> : (
                        <button onClick={() => { updateIndex(activeIndex + 1) }}>Next</button>
                    )}
            </div>)
        }
    </div >
}

export { Carousel, CarouseItem }