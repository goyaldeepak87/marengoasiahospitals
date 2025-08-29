'use client';

import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'react-feather';

const ExpertsSlider = ({ heading, comp, show, expertCards, bgcolor, ...props }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(Number(show) || 4);
  const [showDots, setShowDots] = useState(false);

  const totalSlides = expertCards?.length || 0;
  const lastSlideIndex = totalSlides - slidesToShow;

  // ✅ Dynamically set slidesToShow on window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setSlidesToShow(1);
        setShowDots(true);
      }
      else if (width < 890) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(props.mdshow || 2);
      } else {
        setSlidesToShow(Number(show) || 4);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [show, props.mdshow]);

  const settings = {
    dots: showDots,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div style={{ backgroundColor: bgcolor }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:py-10 py-5 sm:pb-10 pb-6">
        <h2 className="md:text-3xl sm:text-[24px] text-[22px] md:text-left text-center font-bold md:mb-8 mb-5 text-[#007dc6]">{heading}</h2>
        <div className="relative slider_container">
          <Slider {...settings} ref={sliderRef}>
            {expertCards?.map((card, index) => (
              <div key={index} className="px-2">
                {React.createElement(comp, { card })}
              </div>
            ))}
          </Slider>

          {/* Prev Button */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className={`arrow_slider absolute left-0 top-[36%] transform -translate-y-1/2 bg-[#0088CC] text-white p-2 rounded-full shadow-lg hover:bg-[#0088CC] focus:outline-none cursor-pointer ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentSlide === 0}
            aria-label="Previous Slide"
          >
            <ChevronLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className={`arrow_slider absolute right-0 top-[36%] transform -translate-y-1/2 bg-[#0088CC] text-white p-2 rounded-full shadow-lg hover:bg-[#0088CC] focus:outline-none cursor-pointer ${currentSlide >= lastSlideIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentSlide >= lastSlideIndex}
            aria-label="Next Slide"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertsSlider;
