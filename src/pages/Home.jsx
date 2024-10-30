import Header from "../components/Header.jsx";
import sliderBg from "../assets/images/backgrounds/221.webp";
import sliderBg1 from "../assets/images/shapes/experience-and-rating-experience-shape-1.jpg";
import sliderBg11 from "../assets/images/backgrounds/experience-and-rating-video-bg.jpg";
import about from "../assets/images/resources/about-one-img-1.jpg";
import why from "../assets/images/resources/why-choose-one-img-1.jpg";
import tv from "../assets/img/image.webp";
import contect from "../assets/images/icon/contact-bar-call-icon.png";
import backgroundImage from "../assets/images/backgrounds/contact-bar-bg.jpg";
import faq from "../assets/images/backgrounds/faq-one-bg.jpg";
import blog from "../assets/images/blog/blog-1-1.jpg";
import blog2 from "../assets/images/blog/blog-1-2.jpg";
import blog3 from "../assets/images/blog/blog-1-3.jpg";
import TestimonialCarousel from "../components/TestimonialCarousel.jsx";
import React, { useEffect, useState, useRef } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";
import Footer from "../components/footer/Footer.jsx";
import { Link } from "react-router-dom";


function Home() {
  const odometerRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay the start of animations slightly
  }, []);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimate(true); // Set the animation state to true after the delay
    }, 100); // Delay for the animation to start (100ms)
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // Default is viewport
      rootMargin: "0px",
      threshold: 1.0, // Trigger when 100% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Ensure it only animates once
        }
      });
    }, observerOptions);

    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    return () => {
      if (odometerRef.current) {
        observer.unobserve(odometerRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated && odometerRef.current) {
      const odometer = new Odometer({
        el: odometerRef.current,
        value: 0, // Initial value
      });
      setTimeout(() => {
        odometer.update(2800); // Change to your desired value (2800 for 2.8k)
      }, 500); // Optional delay to smoothen animation
    }
  }, [hasAnimated]);

  // Inline styles for lines animating from the top
  const topLineStyle = {
    transform: animate ? "translateY(0)" : "translateY(-100px)", // Move down
    opacity: animate ? 1 : 0,
    transition: "transform 1s ease, opacity 3s ease",
  };

  // Inline styles for lines animating from the bottom
  const bottomLineStyle = {
    transform: animate ? "translateY(0)" : "translateY(100px)", // Move up
    opacity: animate ? 1 : 0,
    transition: "transform 1s ease, opacity 3s ease",
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "01. What types of appliances do you repair?",
      answer:
        "We repair a wide range of home appliances, including refrigerators, washing machines, dryers, ovens, dishwashers, and more. If you're unsure about a specific appliance, feel free to contact us!",
    },
    {
      question: "02. How quickly can you schedule a repair appointment?",
      answer:
        "We understand the urgency of appliance issues. In most cases, we can schedule a repair appointment within 24 hours. Please reach out to us for availability.",
    },
    {
      question: "03. What should I do if my appliance is under warranty?",
      answer:
        "If your appliance is under warranty, we recommend checking the warranty terms. In many cases, repairs must be performed by an authorized service provider. Contact us to discuss your options and how we can assist you.",
    },
    {
      question: "04. Do you provide a warranty on your repair services?",
      answer:
        "Yes, we offer a warranty on our repair services. This covers both parts and labor for a specified period, ensuring you have peace of mind after we complete the job. Please ask our technician for specific details during your appointment.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="page-wrapper">
        <Header />
        <section className="main-slider">
          <div className="swiper-container thm-swiper__slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="main-slider__image"
                  style={{ backgroundImage: `url(${sliderBg})`,height: '100%' ,width: '120%'  }}
                ></div>

                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-9">
                      <div className="main-slider__content">
                        {/* Line from top */}
                        <p
                          className="main-slider__sub-title"
                          style={{topLineStyle, color:'white'}}
                        >
                          We Provide ...
                        </p>

                        {/* Line from top */}
                        <h2 className="main-slider__title" style={{topLineStyle,color:'white'}}>
                          Home Appliances <br />
                          Repair Service
                        </h2>

                        {/* Line from top */}
                        <h3 className="main-slider__text" style={{topLineStyle, color:'white'}}>
                          Same day service Guaranteed Or It's Free!
                        </h3>

                        {/* Line from bottom */}
                       

                        {/* Button from bottom */}
                        <div
                          className="main-slider__btn-box"
                          style={bottomLineStyle}
                        >
                          <Link to="/contact"
                            className="thm-btn main-slider__btn"
                          >
                            Hire us now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="experience-and-rating">
          <div className="experience-and-rating__wrapper">
            <div className="experience-and-rating__left">
              <div className="experience-and-rating__left-content">
                <div className="experience-and-rating__experience">
                  <div
                    className="experience-and-rating__experience-shape-1"
                    style={{ backgroundImage: `url(${sliderBg1})` }}
                  ></div>

                  <div className="experience-and-rating__experience-year">
                    <h2>2</h2>
                    <h5>year of experience</h5>
                  </div>
                  <div className="experience-and-rating__experience-text-box">
                    <p>
                      Many years of experience in the repair of home equipment
                      of various complexity.
                    </p>
                  </div>
                </div>
                <div className="experience-and-rating__video">
                  <div
                    className="experience-and-rating__video-bg"
                    style={{ backgroundImage: `url(${sliderBg11})` }}
                  ></div>
                  <div className="experience-and-rating__video-link">
                    <a aria-label="youtube video"
                      href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                      className="video-popup"
                    >
                      <div className="experience-and-rating__video-icon">
                        <span className="fa fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-and-rating__right">
              <div className="experience-and-rating__right-content">
                <div className="experience-and-rating__rating-box">
                  <div className="experience-and-rating__rating-icon">
                    <span className="icon-review"></span>
                  </div>
                  <p className="experience-and-rating__rating-text">
                    Customers Trust and Love us. We're rated 5/5 out of 300
                    customer reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-one">
          <div className="container">
            <div className="services-one__top">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="services-one__top-left">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">Our Services</span>
                      <h2 className="section-title__title">
                        Services We Do For You
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="services-one-top__right">
                    <div className="services-one__top-icon">
                      <span className="icon-technician"></span>
                    </div>
                    <p className="services-one__top-text">
                      We work to meet this ambitious goal by focusing on these
                      key areas of conservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-one__bottom">
              <div className="services-one__img"></div>
              <ul className="services-one__list-box list-unstyled">
                <li className="services-one__list">
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <span className="icon-refrigerator"></span>
                    </div>
                    <div className="services-one__title-box">
                      <h4 className="services-one__title">
                        <Link to="/contact" state={{ service: "Refrigerator Repair" }} >Refrigerator</Link>
                      </h4>
                      <p className="services-one__sub-title">Service and Repairs</p>
                    </div>
                    <div className="services-one__read-more">
                      <Link to="/contact" state={{ service: "Refrigerator Repair" }}  >
                      book service 
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="services-one__list">
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <span className="icon-washing-machine"></span>
                    </div>
                    <div className="services-one__title-box">
                      <h4 className="services-one__title">
                      <Link to="/contact"  state={{ service: "Washing Machine Repair" }}>Washing Machine</Link>
                      </h4>
                      <p className="services-one__sub-title">Service and Repairs</p>
                    </div>
                    <div className="services-one__read-more">
                      <Link to="/contact"  state={{ service: "Washing Machine Repair" }}>
                      book service 
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="services-one__list">
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <span className="icon-oven"></span>
                    </div>
                    <div className="services-one__title-box">
                      <h4 className="services-one__title">
                        <Link to="/contact" state= {{ service: "Microwave Oven Repair"  }} >Microwave & Oven</Link>
                      </h4>
                      <p className="services-one__sub-title">Service and Repairs</p>
                    </div>
                    <div className="services-one__read-more">
                      <Link to="/contact" state= {{ service: "Microwave Oven Repair"  }} >
                      book service  
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="services-one__list">
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <span className="icon-water-heater"></span>
                    </div>
                    <div className="services-one__title-box">
                      <h4 className="services-one__title">
                        <Link to="/contact" state= {{ service: "Water Heater Repair" }} >Water Heater</Link>
                      </h4>
                      <p className="services-one__sub-title">Service and Repairs</p>
                    </div>
                    <div className="services-one__read-more">
                      <Link to="/contact" state= {{ service: "Water Heater Repair" }} >
                      book service 
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="services-one__list">
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <span className="icon-gas"></span>
                    </div>
                    <div className="services-one__title-box">
                      <h4 className="services-one__title">
                        <Link to="/contact" state={{ service: "Stove Repair"  }} >Cookware Stove</Link>
                      </h4>
                      <p className="services-one__sub-title">Service and Repairs</p>
                    </div>
                    <div className="services-one__read-more">
                      <Link to="/contact" state={{ service: "Stove Repair"  }} >
                      book service 
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="services-one__list">
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <span className="icon-blender"></span>
                    </div>
                    <div className="services-one__title-box">
                      <h4 className="services-one__title">
                        <Link to="/contact" state= {{ service: "Mixer Repair"  }} >Juicer Mixer</Link>
                      </h4>
                      <p className="services-one__sub-title">Service and Repairs</p>
                    </div>
                    <div className="services-one__read-more">
                      <Link to="/contact"  state= {{ service: "Mixer Repair"  }} >
                      book service  
                      </Link>
                    </div>
                  </div>
                </li>

                

                <li className="services-one__list">
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <span className="icon-ac"></span>
                    </div>
                    <div className="services-one__title-box">
                      <h4 className="services-one__title">
                        <Link to="/contact" state={{ service: "AC Repair" }} >Air Conditioner</Link>
                      </h4>
                      <p className="services-one__sub-title">Service and Repairs</p>
                    </div>
                    <div className="services-one__read-more">
                      <Link to="/contact" state={{ service: "AC Repair" }} >
                      book service 
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="services-one__list">
                  <div className="services-one__single">
                    <div className="services-one__icon">
                      <img src={tv} style={{height:"66px"}} alt="tv"></img>
                    </div>
                    <div className="services-one__title-box">
                      <h4 className="services-one__title">
                        <Link to="/contact" state={{ service: "TV Repair"  }} >TV</Link>
                      </h4>
                      <p className="services-one__sub-title">Service and Repairs</p>
                    </div>
                    <div className="services-one__read-more">
                      <Link to="/contact" state={{ service: "TV Repair"  }} >
                      book service  
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="services-one__list"></li>
              </ul>
            </div>
            <div className="services-one__all-services">
              <div className="row">
                <div className="col-xl-12">
                  <div className="services-one__all-services-inner">
                    <p>
                      We Do All Differeent Services ....{" "}
                      <Link to="/services">View all Services</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5">
                <div className="about-one__left">
                  <div
                    className="about-one__img-box wow slideInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                  >
                    <div className="about-one__img">
                      <img src={about} alt="about" />
                    </div>
                    <div className="about-one__satisfaction">
                      <div className="about-one__satisfaction-count-box">
                        <h3>
                          <div id="odometer-section">
                            <span
                              className="odometer"
                              ref={odometerRef}
                              data-count="2.8"
                            ></span>
                          </div>
                          <span className="about-one__satisfaction-letter">k</span>
                          <span className="about-one__satisfaction-plus">+</span>
                        </h3>
                      </div>
                      <p className="about-one__satisfaction-text">
                        Satisfied Clients <br /> In Our Locality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="about-one__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      about our company
                    </span>
                    <h2 className="section-title__title">
                      Complete Solution for all Your Home Appliance Problems
                    </h2>
                  </div>
                  <p className="about-one__text-1">
                    Bring to the table win-win survival strategies to ensure
                    proactive domination ensure proactive domin.
                  </p>
                  <p className="about-one__text-2">
                    At the end of the day, going forward, a new normal that has
                    evolved from generation X is on the runway heading towards a
                    streamlined cloud solution. strategies to ensure proactive
                    domination. At the end of the day,User generated content in
                    real-time will have multiple touchpoints for offshoring. At
                    the end of the day,User generated content in real-time will
                    have multiple touchpoints for offshoring.
                  </p>
                  <div className="about-one__points-box">
                    <ul className="about-one__points-list list-unstyled">
                      <li>
                        <div className="about-one__points-icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="about-one__points-text">
                          <p>Highly Professional Staff</p>
                        </div>
                      </li>
                      <li>
                        <div className="about-one__points-icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="about-one__points-text">
                          <p>100% Satisfaction Guarantee</p>
                        </div>
                      </li>
                      <li>
                        <div className="about-one__points-icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="about-one__points-text">
                          <p>Quality Control System</p>
                        </div>
                      </li>
                    </ul>
                    <ul className="about-one__points-list list-unstyled">
                      <li>
                        <div className="about-one__points-icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="about-one__points-text">
                          <p>Accourate Testing Process</p>
                        </div>
                      </li>
                      <li>
                        <div className="about-one__points-icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="about-one__points-text">
                          <p>Unrivalle Workmanship</p>
                        </div>
                      </li>
                      <li>
                        <div className="about-one__points-icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="about-one__points-text">
                          <p>Timely Delivery</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  

        <section className="why-choose-one">
          <div className="why-choose-one__img-1">
            <img src={why} alt="why choose" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="why-choose-one__content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">why choose us</span>
                    <h2 className="section-title__title">Our Advantages</h2>
                  </div>
                  <p className="why-choose-one__text">
                  If you need to repair or replace your home appliances, contact us today to speak with one of our specialists. They’re ready to answer all your questions and schedule an appointment at your convenience. Don’t hesitate—reach out today for expert assistance with your appliances!




                  </p>
                  <div className="why-choose-one__points-box">
                    <ul className="list-unstyled why-choose-one__points">
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <div className="text">
                          <p>
                            We Perform All <br /> Work On Time
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-home"></span>
                        </div>
                        <div className="text">
                          <p>
                            Professional <br /> Standard
                          </p>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-unstyled why-choose-one__points why-choose-one__points-two">
                      <li>
                        <div className="icon">
                          <span className="icon-guarantee"></span>
                        </div>
                        <div className="text">
                          <p>
                            We Guarantee <br /> Spare Parts
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-worker"></span>
                        </div>
                        <div className="text">
                          <p>
                            Over 2 Year <br /> Of Experience
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     

        {/* <!--Process Start--> */}
        <section className="process">
          <div className="container">
            <div className="section-title text-left">
              <span className="section-title__tagline">Our Process</span>
              <h2 className="section-title__title">Get Our Service In 4 Steps</h2>
            </div>
            <div className="row">
              {/* <!--Process Single Start--> */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="process__single">
                  <div className="process__count"></div>
                  <div className="process__icon">
                    <span className="icon-contact"></span>
                  </div>
                  <div className="process__title-box">
                    <h4 className="process__title">Contact Us</h4>
                    <p className="process__sub-title">First Step of Process</p>
                  </div>
                  <p className="process__text">
                   Fill form or call us we heard your request as soon as possible
                  </p>
                </div>
              </div>
              {/* <!--Process Single End-->
                    <!--Process Single Start--> */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="process__single">
                  <div className="process__count"></div>
                  <div className="process__icon">
                    <span className="icon-conversation"></span>
                  </div>
                  <div className="process__title-box">
                    <h4 className="process__title">Breakdown Analysis</h4>
                    <p className="process__sub-title">Second Step of Process</p>
                  </div>
                  <p className="process__text">
                    We will assign best technician for your problem
                  </p>
                </div>
              </div>
              {/* <!--Process Single End-->
                    <!--Process Single Start--> */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="process__single">
                  <div className="process__count"></div>
                  <div className="process__icon">
                    <span className="icon-repair"></span>
                  </div>
                  <div className="process__title-box">
                    <h4 className="process__title">Performing Repairs</h4>
                    <p className="process__sub-title">Third Step of Process</p>
                  </div>
                  <p className="process__text">
                    Our technician Performing Repairs on Appliances and fix the issues
                  </p>
                </div>
              </div>
              {/* <!--Process Single End-->
                    <!--Process Single Start--> */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="process__single">
                  <div className="process__count"></div>
                  <div className="process__icon">
                    <span className="icon-fixed"></span>
                  </div>
                  <div className="process__title-box">
                    <h4 className="process__title">Feedback</h4>
                    <p className="process__sub-title">Third Steop of Process</p>
                  </div>
                  <p className="process__text">
                   we will summarize repair expenses and warranty coverage
                  </p>
                </div>
              </div>
              {/* <!--Process Single End--> */}
            </div>
          </div>
        </section>
        {/* <!--Process End--> */}





        {/* <!--Contact Bar Start--> */}
        <section className="contact-bar">
          <div className="container">
            <div className="contact-bar__inne">
              <div
                className="contact-bar__bg"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              <div className="contact-bar__left">
                <div className="contact-bar__left-icon">
                  <span className="icon-diagnostic"></span>
                </div>
                <div className="contact-bar__left-content">
                  <h3 className="contact-bar__title">
                    Do You Want Free Diagnostics ?
                  </h3>
                  <p className="contact-bar__text">
                    Get free diagnostics when ording online from our website
                  </p>
                </div>
              </div>
              <div className="contact-bar__right">
                <div className="contact-bar__call">
                  <div className="contact-bar__call-icon">
                    <img src={contect} alt="contect" />
                  </div>
                  <div className="contact-bar__call-content">
                    <h4 className="contact-bar__call-number">
                      <a href="tel:9328939099">+91 9328939099</a>
                    </h4>
                    <p className="contact-bar__call-time">
                      Monday - Saturday : 9.30 am - 6.00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Contact Bar End--> */}
        <TestimonialCarousel />
        {/* <!--Tetimonial One End--> */}
        {/* <!--FAQ One Start--> */}
        <section className="faq-one">
          <div
            className="faq-one__bg"
            style={{ backgroundImage: `url(${faq})`,height: '100%', width:'100%'}}
          ></div>
          <div style={{height:'70vh'}} className="container">
            <div  className="row">
              <div  className="">
                <div className="faq-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Get Answers</span>
                    <h2 className="section-title__title">
                      Do You Have Questions Appliance Repairs
                    </h2>
                  </div>
                  <div className="faq-one__faq-box">
                    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          style={{
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                          }}
                        >
                          <div
                            onClick={() => handleToggle(index)}
                            style={{
                              backgroundColor: "#f1f1f1",
                              padding: "15px",
                              cursor: "pointer",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <h4
                              style={{
                                margin: 0,
                                fontFamily: "Barlow,sans-serif",
                                fontSize: "20px",
                              }}
                            >
                              {faq.question}
                            </h4>
                            <span style={{ fontSize: "20px" }}>
                              {activeIndex === index ? "-" : "+"}
                            </span>
                          </div>
                          <div
                            style={{
                              maxHeight: activeIndex === index ? "200px" : "0",
                              overflow: "hidden",
                              transition: "max-height 0.3s ease-in-out",
                            }}
                          >
                            <div
                              style={{
                                padding: "10px",
                                backgroundColor: "#fff",
                                borderTop: "1px solid #ccc",
                              }}
                            >
                              <p style={{ margin: 0 }}>{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </section>
        {/* <!--FAQ One End--> */}
        {/* <!--Blog One Start--> */}
       
        {/* <!--Blog One End--> */}
        <Footer />
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "#00a7eb",
            color: "#fff",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <i aria-label="go to top" className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}

export default Home;
