import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/images/backgrounds/BulavoLogo.png'; // Update with your logo path

const PreLoader = () => {
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const handlePreloader = () => {
      const loaderWrap = document.querySelector('.loader-wrap');

      if (loaderWrap && !isAnimatingRef.current) {
        isAnimatingRef.current = true;

        setTimeout(() => {
          gsap.to(loaderWrap, {
            duration: 1,
            opacity: 0,         
          });
        }, 1000);

        gsap.to('.loader-wrap .overlay', {
          duration: 1.5,
          left: '100%',
          ease: 'power2.inOut',
          force3D: true
        });
      }
    };

    handlePreloader();

    return () => {
      isAnimatingRef.current = false;
    };
  }, []);

  return (
    <div className="loader-wrap">
      <div className="preloader">
        <div id="handle-preloader" className="handle-preloader">
          <div className="layer layer-one">
            <span className="overlay"></span>
          </div>
          <div className="layer layer-two">
            <span className="overlay"></span>
          </div>
          <div className="layer layer-three">
            <span className="overlay"></span>
          </div>
          <div className="animation-preloader">
            <div className="spinner">
              {/* Logo placed in a separate div to avoid spinning */}
              <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
              </div>
            </div>
            <div className="txt-loading">
              {['B', 'U', 'L', 'A', 'V', 'O'].map((letter, index) => (
                <span
                  key={index}
                  data-text-preloader={letter}
                  className="letters-loading"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
