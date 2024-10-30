import Header from "../components/Header.jsx";
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import service from "../assets/images/services/services-page-img-1.png";
import contact from "../assets/images/backgrounds/contact-bar-bg.jpg";
import bar from "../assets/images/icon/contact-bar-call-icon.png";
import { Link } from "react-router-dom";
import tv from "../assets/img/tv.png";
import gyser from "../assets/img/gyser.png";
import Footer from "../components/footer/Footer.jsx";
import Chimney from "../assets/img/Chimney.png";
import RO from "../assets/img/R.O.png";
import why from "../assets/images/resources/why-choose-one-img-1.jpg";

function Services() {
  
  return (
    <div className="page-wrapper">
      <Header />
      {/* <!--Page Header Start--> */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${page})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__inner">
                <h2 className="page-header__title">Services</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Page Header End--> */}
      <section className="services-page">
        <div className="container">
          <div className="section-title text-left">
            <span className="section-title__tagline">our services</span>
            <h2 className="section-title__title">What We Do For Our Customers</h2>
            <p className="services-page__sec-title-text">
              At Bulavo, we prioritize our customers by providing reliable and
              comprehensive appliance repair services tailored to meet your
              needs. Our experienced technicians are dedicated to diagnosing and
              resolving issues with efficiency and expertise, ensuring minimal
              disruption to your daily life. We handle a wide range of
              appliances, from refrigerators and washing machines to ovens and
              dishwashers, delivering high-quality repairs that restore your
              appliances to optimal performance.
            </p>
          </div>
          <ul className="list-unstyled services-page__list-box">
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-refrigerator"></span>
                </div>
                <h3 className="services-page__title">
                <Link to="/contact" state={{ service: "Refrigerator Repair" }}>
                    Refrigerator Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Appliance care has evolved over time, ensuring your refrigerator operates smoothly and efficiently for your daily needs
                </p>
                <div className="services-page__read-more">
                  <Link to="/contact" state={{ service: "Refrigerator Repair"}}>
                    book service  
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-washing-machine"></span>
                </div>
                <h3 className="services-page__title">
                  <Link to={{ pathname: "/contact", state: { service: "Washing Machine Repair" } }}>
                    Washing Machine Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Efficient laundry solutions have evolved, ensuring your washing machine runs smoothly for all your cleaning needs
                </p>
                <div className="services-page__read-more">
                  <Link to="/contact" state={{ service: "Washing Machine Repair" }}>
                    book service  
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-oven"></span>
                </div>
                <h3 className="services-page__title">
                  <Link to="/contact" state= {{ service: "Microwave Oven Repair"  }}>
                    Microwave Oven Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Microwave ovens have evolved significantly, and our repair services ensure your appliance operates efficiently and reliably
                </p>
                <div className="services-page__read-more">
                <Link to="/contact" state= {{ service: "Microwave Oven Repair"  }}>
                    book service  
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-water-heater"></span>
                </div>
                <h3 className="services-page__title">
                  <Link to="/contact" state= {{ service: "Water Heater Repair" }}>
                    Water Heater Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Water heating solutions have advanced, ensuring your heater operates efficiently for consistent hot water when needed
                </p>
                <div className="services-page__read-more">
                <Link to="/contact" state= {{ service: "Water Heater Repair" }}>
                    book service  
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-gas"></span>
                </div>
                <h3 className="services-page__title">
                  <Link to="/contact"state={{ service: "Stove Repair"  }}>
                    Cookware Stove Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Stove technology has improved, providing efficient repairs to keep your cookware working seamlessly for delicious meals
                </p>
                <div className="services-page__read-more">
                <Link to="/contact"state={{ service: "Stove Repair"  }}>
                    book service 
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-blender"></span>
                </div>
                <h3 className="services-page__title">
                  <Link to="/contact" state= {{ service: "Mixer Repair"  }}>
                    Mixer Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Mixing appliances have transformed, providing essential repairs to ensure your mixer performs perfectly for all recipes
                </p>
                <div className="services-page__read-more">
                <Link to="/contact" state= {{ service: "Mixer Repair"  }}>
                book service  
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-ac"></span>
                </div>
                <h3 className="services-page__title">
                  <Link to="/contact" state={{ service: "AC Repair" }}>
                    AC Repair & Service
                  </Link>
                </h3>
                <p className="services-page__text">
                Air conditioning systems have advanced, providing prompt repairs to keep your environment comfortable all year round
                </p>
                <div className="services-page__read-more">
                <Link to="/contact" state={{ service: "AC Repair" }}>
                book service  
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <img style={{ height: '66px' }} src={tv} alt="" />
                </div>
                <h3 className="services-page__title">
                  <Link to="/contact" state={{ service: "TV Repair"  }}>
                    T.V Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Television technology has transformed, ensuring your screen performs perfectly for an enhanced viewing experience every time
                </p>
                <div className="services-page__read-more">
                <Link to="/contact" state={{ service: "TV Repair"  }}>
                book service 
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <img style={{ height: '66px' }} src={gyser} alt="" />
                </div>
                <h3 className="services-page__title">
                  <Link to="/contact" state={{ service: "Geyser Repair"  }}>
                    Geyser Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Geyser efficiency has improved, allowing our repair services to keep your hot water supply reliable and consistent
                </p>
                <div className="services-page__read-more">
                <Link to="/contact" state={{ service: "Geyser Repair"  }}>
                book service  
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <img style={{ height: '66px' }} src={Chimney} alt="" />
                </div>
                <h3 className="services-page__title">
                  <Link to="/contact" state= {{ service: "Chimney Repair" }}>
                    Chimney Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Chimney systems have evolved, ensuring efficient repairs for a smoke-free kitchen and improved air quality at home.
                </p>
                <div className="services-page__read-more">
                <Link to="/contact" state= {{ service: "Chimney Repair" }}>
                book service 
                  </Link>
                </div>
              </div>
            </li>
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <img style={{ height: '66px' }} src={RO} alt="" />
                </div>
                <h3 className="services-page__title">
                  <Link to="/contact" state={{ service: "R.O Water Purifier Repair"  }}>
                    R.O Water Purifier Repair & service
                  </Link>
                </h3>
                <p className="services-page__text">
                Water purification has advanced, guaranteeing efficient repairs to keep your R.O. system delivering clean, safe drinking water
                </p>
                <div className="services-page__read-more">
                <Link to="/contact" state={{ service: "R.O Water Purifier Repair"  }}>
                book service  
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          
          <div className="services-page__bottom">
            <div className="services-page__img float-bob-x">
              <img src={service} alt="service" />
            </div>
          </div>
        </div>
      </section>
      {/* <!--Services Page End--> */}

   

      {/* <!--Contact Bar Start--> */}
      <section className="contact-bar contact-bar-three">
        <div className="container">
          <div className="contact-bar__inne">
            <div
              className="contact-bar__bg"
              style={{ backgroundImage: `url(${contact})` }}
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
                  <img src={bar} alt="bar" />
                </div>
                <div className="contact-bar__call-content">
                  <h4 className="contact-bar__call-number">
                    <a
                      href="tel:9328939099
"
                    >
                      +91 9328939099
                    </a>
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
         <section style={{marginBottom:'50px',marginTop:'-70px'}} className="why-choose-one">
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
                  Are you a skilled technician looking for a rewarding career? Join our team and be part of a company that values expertise and dedication. We provide our technicians with ongoing training and support to ensure your success. If you're ready to take the next step in your career, we want to hear from you!
                  </p>
                  <div className="why-choose-one__points-box">
                    <ul className="list-unstyled why-choose-one__points">
                    
                      <li>
                        
                      <div
                          className="main-slider__btn-box"
                          
                        >
                          <Link to="/patner"
                            className="thm-btn main-slider__btn"
                          >
                           join our team
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-unstyled why-choose-one__points why-choose-one__points-two">
                     
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* <!--Contact Bar End--> */}
      {/* <!--Site Footer Start--> */}
      <Footer />
      {/* <!--Site Footer End--> */}
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
  );
}

export default Services;
