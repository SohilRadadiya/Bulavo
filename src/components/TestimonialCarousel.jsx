import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import testi from "../assets/images/backgrounds/testimonial-one-bg.jpg";
import test19 from "../assets/images/testimonial/testimonial-1-2.jpg";

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      text: "I recently had a fantastic experience with Bulavo for my home appliance repairs. My dishwasher stopped working, and I was worried about how long it would take to get it fixed. I called Bulavo, and their customer service was impressive right from the start.",
      name: "Krutik Gabani",
      role: "Satisfied Customer",
      image: "/api/placeholder/80/80"
    },
    {
      text: "They scheduled a technician to come out the next day, which was a relief. The technician arrived on time, was professional, and quickly diagnosed the issue. He explained everything clearly and offered me a couple of options for repair.",
      name: "Mahek Patel",
      role: "Happy Client",
      image: "/api/placeholder/80/80"
    },
    {
      text: "What I appreciated most was their transparency about costs and the quick turnaround time. My dishwasher is now running perfectly, and I couldn't be happier! I highly recommend Bulavo for anyone needing reliable appliance service.",
      name: "Vinit",
      role: "Regular Customer",
      image: "/api/placeholder/80/80"
    },
    {
      text: "I had a wonderful experience with Bulavo when my washing machine broke down unexpectedly. I reached out to their customer service, and they were incredibly helpful and attentive. They scheduled a technician to come by within 24 hours.",
      name: "Sujal",
      role: "Verified Customer",
      image: ""
    }
  ];

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, testimonials.length]);

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section  className="testimonial-section"  style={{ backgroundImage: `url(${testi})` }}>
      <div className="background-decoration">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 style={{color:"white"}}>What Our Clients Say</h2>
          <div className="underline"></div>
        </div>

        <div 
          className="testimonial-container"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="testimonial-card">
            <div className="quote-icon">
              <Quote />
            </div>

            <div className="testimonial-content">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-slide ${currentSlide === index ? 'active' : ''}`}
                >
                  <div className="testimonial-text">
                    <p>"{testimonial.text}"</p>
                  </div>
                  
                  <div className="testimonial-author">
                    <div className="author-image-container">
                      <img
                        src={test19}
                        alt={testimonial.name}
                        className="author-image"
                      />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="navigation-controls">
              <button
                onClick={prevSlide}
                className="nav-button"
                disabled={isAnimating}
                aria-label="navigation"
              >
                <ChevronLeft />
              </button>
              
              <div className="slide-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => !isAnimating && setCurrentSlide(index)}
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    aria-label="slide"
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="nav-button"
                disabled={isAnimating}
                aria-label="nextslide"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx ="true">{`
        .testimonial-section {
          position: relative;
          padding: 80px 0;
          background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 50%, #f0f7ff 100%);
          overflow: hidden;
          
        }

        .background-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.7;
          mix-blend-mode: multiply;
          animation: blob 7s infinite;
        }

        .blob1 {
          top: 0;
          left: 0;
          background: #e6efff;
          animation-delay: 0s;
        }

        .blob2 {
          top: 0;
          right: 0;
          background: #f5e6ff;
          animation-delay: 2s;
        }

        .blob3 {
          bottom: 0;
          left: 50%;
          background: #ffe6f0;
          animation-delay: 4s;
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 36px;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .underline {
          width: 80px;
          height: 4px;
          background: #3b82f6;
          margin: 0 auto;
          border-radius: 2px;
        }

        .testimonial-container {
          max-width: 800px;
          margin: 0 auto;
          
        }

        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .quote-icon {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(50%, -50%);
          background: #3b82f6;
          color: white;
          padding: 16px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .testimonial-content {
          position: relative;
          height: 320px;
        }

        .testimonial-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: translateX(100%) scale(0.95);
          transition: all 0.5s ease-out;
        }

        .testimonial-slide.active {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .testimonial-text {
          margin-bottom: 32px;
        }

        .testimonial-text p {
          font-size: 18px;
          line-height: 1.6;
          color: #4a4a4a;
          
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .author-image-container {
          position: relative;
        }

        .author-image {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-image-container::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 4px solid rgba(59, 130, 246, 0.2);
        }

        .author-info h4 {
          font-size: 20px;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .author-info p {
          color: #3b82f6;
          margin: 0;
        }

        .navigation-controls {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          display: flex;
          align-items: center;
          gap: 16px;
          background: white;
          padding: 8px 20px;
          border-radius: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .nav-button {
          background: none;
          border: none;
          color: #3b82f6;
          padding: 8px;
          cursor: pointer;
          border-radius: 50%;
          transition: background-color 0.3s;
        }

        .nav-button:hover {
          background: #f0f7ff;
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .slide-dots {
          display: flex;
          gap: 12px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: #e5e5e5;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          width: 24px;
          background: #3b82f6;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 30px;
          }

          .testimonial-content {
            height: 400px;
          }

          .section-header h2 {
            font-size: 28px;
          }

          .testimonial-text p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;