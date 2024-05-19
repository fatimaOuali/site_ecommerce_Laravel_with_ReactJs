import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ handleOrderPopup, children: slides, autoSlide = false, autoSlideInterval = 4000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, next]);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[560px] sm:min-h-[660px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-xl"
              >
                Lorem ipsum dolor sit
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>

            <div>
              <div className="relative z-10">
                <div className="overflow-hidden relative w-[300px] h-[300px] sm:h-[680px] sm:w-[510px] sm:scale-105 lg:scale-120 object-contain mx-auto">
                  <div
                    className="flex transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                  >
                    {slides}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                      onClick={prev}
                      className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={next}
                      className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                      {slides.map((_, i) => (
                        <div key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
