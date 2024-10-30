import Header from "../components/Header.jsx";
import about from "../assets/images/resources/about-three-img-1.jpg";
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import vision from "../assets/images/resources/vission-bg-img.jpg";
import vision2 from "../assets/images/backgrounds/vission-bg-img.jpg";
import mission from "../assets/images/resources/our-mission-person-signeture.png";
import mission2 from "../assets/images/resources/our-mission-person-img.jpg";
import TestimonialCarousel from "../components/TestimonialCarousel.jsx";
import { useEffect, useRef, useState } from "react";
import "odometer/themes/odometer-theme-default.css";
import Odometer from "odometer";
import Footer from "../components/footer/Footer.jsx";

function About() {
  const initialValues = useRef({
    value1: 200,
    value2: 100,
    value3: 3000,
  });

  // Final values as constants
  const finalValues = {
    value1: 4800,
    value2: 150,
    value3: 900,
  };

  const odometerRefs = {
    odometer1: useRef(null),
    odometer2: useRef(null),
    odometer3: useRef(null),
  };

  // Store odometer instances
  const odometerInstances = useRef({});

  useEffect(() => {
    // Create odometer instances
    Object.entries(odometerRefs).forEach(([key, ref]) => {
      if (ref.current && !odometerInstances.current[key]) {
        odometerInstances.current[key] = new Odometer({
          el: ref.current,
          value: initialValues.current[`value${key.slice(-1)}`],
          format: "(,ddd)",
          duration: 1000, // Animation duration in ms
        });
      }
    });

    // Update values after a delay
    const timer = setTimeout(() => {
      Object.entries(odometerInstances.current).forEach(([key, instance]) => {
        const valueKey = `value${key.slice(-1)}`;
        instance.update(finalValues[valueKey]);
      });
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      Object.values(odometerInstances.current).forEach((instance) => {
        if (instance && instance.el) {
          instance.el.innerHTML = "";
        }
      });
      odometerInstances.current = {};
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${page})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__inner">
                <h2 className="page-header__title">About Us</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* About Three Start */}
      <section className="about-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="about-three__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">About Company</span>
                  <h2 className="section-title__title">
                    At Bulavo, we pride ourselves on being the trusted experts
                    in home appliance repair for over two years. Our experienced
                    technicians are dedicated to delivering top-notch service
                    with a focus on quality and reliability. We understand how
                    crucial your appliances are to your daily routine, and we
                    are committed to providing efficient, effective solutions
                    that get you back up and running in no time. With a
                    reputation built on trust, professionalism and exceptional
                    customer care you can count on Bulavo to handle all your
                    appliance repair needs with expertise and integrity.
                  </h2>
                </div>

                <div className="about-three__points-box">
                  <ul className="about-three__points list-unstyled">
                    <li key="qualified-team">
                      <div className="icon">
                        <span className="icon-comment"></span>
                      </div>
                      <div className="text">
                        <p>Qualified Team</p>
                      </div>
                    </li>
                    <li key="affordable-pricing">
                      <div className="icon">
                        <span className="icon-comment"></span>
                      </div>
                      <div className="text">
                        <p>Affordable Pricing</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="about-three__points list-unstyled">
                    <li key="work-on-time">
                      <div className="icon">
                        <span className="icon-comment"></span>
                      </div>
                      <div className="text">
                        <p>Work On Time</p>
                      </div>
                    </li>
                    <li key="emergency-service">
                      <div className="icon">
                        <span className="icon-comment"></span>
                      </div>
                      <div className="text">
                        <p>24/7 Emergency Service</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="about-three__right">
                <div
                  className="about-three__img-box wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="about-three__img">
                    <img src={about} alt="About Bulavo" />
                  </div>
                  <div className="about-three__count-box">
                    <h3 className="odometer" ref={odometerRefs.odometer1}></h3>
                    <span className="about-three__letter">k</span>
                    <span className="about-three__plus">+</span>
                    <p className="about-three__count-text">
                      Satisfied Clients
                      <br /> In Our Locality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Three End */}
      {/* <!--Vission Start--> */}
      <section className="vission">
        <div className="vission__wrap">
          <div className="vission__left">
            <div
              className="vission__bg"
              style={{ backgroundImage: `url(${vision})` }}
            ></div>
          </div>
          <div className="vission__right">
            <div
              className="vission__bg-img"
              style={{ backgroundImage: `url(${vision2})` }}
            ></div>
            <div className="vission__right-inner">
              <div className="vission__count-area">
                <ul className="vission__count-box list-unstyled">
                  <li>
                    <h3 className="odometer" ref={odometerRefs.odometer2}></h3>

                    <p className="vission__successful-text">
                      Successful
                      <br /> Projects
                    </p>
                  </li>
                  <li>
                    <h3 className="odometer" ref={odometerRefs.odometer3}></h3>

                    <p className="vission__successful-text">
                      Client
                      <br /> Satisfaction
                    </p>
                  </li>
                </ul>
              </div>
              <div className="company-vission">
                <div className="section-title text-left">
                  <span className="section-title__tagline">company vision</span>
                  <h2 className="section-title__title">
                    Repair Appliances Beyound Expectations
                  </h2>
                </div>
                <p className="company-vission__text-1">
                  At Bulavo, we believe in going above and beyond when it comes
                  to appliance repair. Our dedicated team of skilled technicians
                  is committed to providing exceptional service that exceeds
                  your expectations. We tackle every repair with precision and
                  care.
                </p>
                <p className="company-vission__text-2">
                  With a focus on quality workmanship and customer satisfaction,
                  we strive to make the repair process seamless and hassle-free.
                  Trust Bulavo to deliver results that not only meet your needs
                  but also enhance the longevity and efficiency of your
                  appliances.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Vission End--> */}
      {/* <!--Our Mission Start--> */}
      <section className="our-mission__two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="our-mission__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Our mission</span>
                  <h2 className="section-title__title">
                    We Comes To Taking Care Of Your Appliacnes
                  </h2>
                </div>
                <p className="our-mission__text-1">
                  At Bulavo, we are dedicated to taking care of your appliances
                  with the utmost professionalism and care. We understand how
                  essential your home appliances are to your daily life, and our
                  mission is to ensure they operate at their best. With a team
                  of skilled technicians and a commitment to exceptional
                  customer service, we strive to provide reliable repairs and
                  maintenance that keep your appliances running smoothly. Your
                  satisfaction is our priority, and we aim to build lasting
                  relationships based on trust and quality service..{" "}
                </p>
                <div className="our-mission__person">
                  <div className="our-mission__person-signeture">
                    <img src={mission} alt="mission" />
                  </div>
                  <div className="our-mission__person-img">
                    <img src={mission2} alt="mission2" />
                  </div>
                  <div className="our-mission__person-content">
                    <h3>Jaimin Patel</h3>
                    <p>Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="our-mission__right">
                <div className="row">
                  {/* <!--Our Mission Single Start--> */}
                  <div className="col-xl-6">
                    <div className="our-mission__single">
                      <p className="our-mission__title">our vision</p>
                      <p className="our-mission__text-2">
                        To be the leading home appliance service provider,
                        recognized for our commitment to quality, innovation,
                        and customer satisfaction. We envision a world where
                        every household enjoys seamless and efficient appliance
                        performance, enhancing their everyday lives.
                      </p>
                    </div>
                  </div>
                  {/* <!--Our Mission Single Start-->
                                <!--Our Mission Single Start--> */}
                  <div className="col-xl-6">
                    <div className="our-mission__single">
                      <p className="our-mission__title">our misson</p>
                      <p className="our-mission__text-2">
                        At Bulavo, our mission is to provide exceptional service
                        and support for your home appliances. We are dedicated
                        to delivering prompt, reliable repairs and maintenance,
                        ensuring your appliances function optimally. Our team of
                        skilled technicians prioritizes customer satisfaction,
                        fostering trust through transparent communication and a
                        commitment to excellence
                      </p>
                    </div>
                  </div>
                  {/* <!--Our Mission Single Start--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Our Mission End--> */}
      {/* testimonial start */}
      <TestimonialCarousel />
      {/* <!--Tetimonial One End--> */}

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
        <i className="fa fa-angle-up"></i>
      </a>

      <Footer />
      {/* <!--Site Footer End--> */}
    </div>
  );
}

export default About;
