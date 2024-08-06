import React, { useState, useEffect, useRef } from 'react';

// Importing images
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';

import leftArrow from '../images/left-arrow.svg';
import rightArrow from '../images/right-arrow.svg';

// Array of images
const slides = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Pagination = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const length = slides.length;
    const intervalRef = useRef(null);

    // Move to the next slide
    const nextSlide = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    // Move to the previous slide
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    // Automatically change slide every 5000ms
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(nextSlide, 900); // Adjust time here
        }
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const handleMouseEnter = () => {
        setIsPaused(true);
        clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div className='relative w-[1400px] h-[150px] overflow-hidden'
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='flex absolute w-1300 h-full transition-transform duration-1000'
                style={{ transform: `translateX(-${current * 130}px)`, gap:'10px' }}>
            
                {[...slides, ...slides].map((slide, index) => (
                    <img key={index} src={slide} alt={`slide ${index}`}
                        className='w-[150px] h-full flex-shrink-0 object-cover'/>
                ))}
            </div>
     
            <button onClick={prevSlide}
                className='absolute left-0 top-1/2 transform text-white -translate-y-1/2 p-2'>
                <img src={leftArrow} alt="left arrow" className='w-[30px] h-[30px]' />
            </button>
            <button onClick={nextSlide}
                className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2'>
                <img src={rightArrow} alt="right arrow" className='w-[30px] h-[30px]' />
            </button>
        </div>
    );
};

export default Pagination;

