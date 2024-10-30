import React from 'react'
import Header from '../components/Header'
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import ser from "../assets/images/resources/services-details-img-1.jpg";
import ab from "../assets/images/resources/about-quality-img-1.jpg";
import video from "../assets/images/services/video-gallery-img-1.jpg";
import video2 from "../assets/images/services/video-gallery-img-2.jpg";
import video3 from "../assets/images/services/video-gallery-img-3.jpg";
import right from "../assets/images/services/video-gallery-right-content-img-1.jpg";
import Footer from '../components/footer/Footer';
function singleservice() {
  return (
    <div className="page-wrapper">
        <Header/>
        <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${page})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__inner">
                <h2 className="page-header__title">Single Service</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Single Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}
      <section class="services-details">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="services-details__left">
                            <div class="services-details__img">
                               
                                <img src={ser} alt="service"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="services-details__right">
                            <div class="section-title text-left">
                                <span class="section-title__tagline">service details</span>
                                <h2 class="section-title__title">Cookware Stove Repairing</h2>
                            </div>
                            <p class="services-details__text-1">There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected humour,
                                or randomised words which don't look even slightly believable. If you are going to use a
                                passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                the middle of text. </p>
                            <ul class="services-details__points-list list-unstyled">
                                <li>
                                    <div class="icon">
                                        <span class="icon-comment"></span>
                                    </div>
                                    <div class="text">
                                        <p>Referigetor Repairing</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-comment"></span>
                                    </div>
                                    <div class="text">
                                        <p>Kitchen Hood Repairs</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-comment"></span>
                                    </div>
                                    <div class="text">
                                        <p>TV Unit Repairing</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-comment"></span>
                                    </div>
                                    <div class="text">
                                        <p>Water Heater Problem Fixes</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-comment"></span>
                                    </div>
                                    <div class="text">
                                        <p>Airconditioner Breakdown</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-comment"></span>
                                    </div>
                                    <div class="text">
                                        <p>Boiler Breakdown</p>
                                    </div>
                                </li>
                            </ul>
                            <p class="services-details__text-2">Randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                                isn't anything embarrassing hidden</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--About Quality Start--> */}
        <section class="about-quality">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6">
                        <div class="about-quality__left">
                            <div class="about-quality__img">
                             
                                <img src={ab} alt="ab"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6">
                        <div class="about-quality__right">
                            <div class="section-title text-left">
                                <span class="section-title__tagline">About Quality</span>
                                <h2 class="section-title__title">Modern Service Standard</h2>
                            </div>
                            <p class="about-quality__text-1">Which don't look even slightly believable. If you are going
                                to use a passage of Lorem Ipsum, you need to be sure</p>
                            <p class="about-quality__text-2">Which don't look even slightly believable. If you are going
                                to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                                hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                                repeat predefined. It uses a dictionary of over 200 Latin words, combined with a handful
                                of model sentence ernet tend to repeat presure.</p>
                            <ul class="list-unstyled about-quality__points">
                                <li>
                                    <div class="icon">
                                        <span class="fas fa-arrow-right"></span>
                                    </div>
                                    <div class="text">
                                        <p>Start Roofing Construction Planning</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="fas fa-arrow-right"></span>
                                    </div>
                                    <div class="text">
                                        <p>Quality Construction </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="fas fa-arrow-right"></span>
                                    </div>
                                    <div class="text">
                                        <p>Work With Architecture Style</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="fas fa-arrow-right"></span>
                                    </div>
                                    <div class="text">
                                        <p>Roof Construction Consult With Expert</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--About Quality End--> */}
        <section class="video-gallery">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 col-lg-8">
                        <div class="video-gallery__left">
                            <h3 class="video-gallery__title-one">Images & Videos</h3>
                            <p class="video-gallery__text-1">Majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly believable. If you are going
                                to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                                hidden in the middle of text.</p>
                            <div class="video-gallery__img-boxes">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-4 col-md-4">
                                        <div class="video-gallery__img-single">
                                           
                                            <img src={video} alt="video"/>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-4">
                                        <div class="video-gallery__img-single">
                                          
                                            <img src={video2} alt="video2"/>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-4">
                                        <div class="video-gallery__img-single">
                                           
                                            <img src={video3} alt="video3"/>
                                            <div class="video-gallery__video-link">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                                                    class="video-popup">
                                                    <div class="video-gallery__video-icon">
                                                        <span class="fa fa-play"></span>
                                                        <i class="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="video-gallery__service">
                                <h3 class="video-gallery__service-title">Benefit of Service</h3>
                                <p class="video-gallery__service-text">Duis quis faucibus dolor. Nulla nulla justo,
                                    posuere eu aliquam a, tristique sed nisi. Suspendisse vel erat mauris. Maecenas
                                    maximus sed nisl imperdiet eleifend. Mauris suscipit.</p>
                            </div>
                            <div class="video-gallery__service-points-box">
                                <ul class="list-unstyled video-gallery__service-points">
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>Spare parts for all models of equipment</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>Free departure of the master at home</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>Branded warranty for repairs 3 years</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>Maintain your home cleaness</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul
                                    class="list-unstyled video-gallery__service-points video-gallery__service-points--2">
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>20% discount for online ordering services</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>Completed orders by our masters</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>Worked finished on time</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-check"></i>
                                        </div>
                                        <div class="text">
                                            <p>We guarantee spare parts</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4">
                        <div class="video-gallery__right">
                            <div class="video-gallery__right-sidebar">
                                <div class="video-gallery__right-content">
                                    <div class="video-gallery__right-content-img">
                                      
                                        <img src={right} alt="right"/>
                                    </div>
                                    <div class="video-gallery__right-content-title">
                                        <h3>Available <br/> <span>for any type of <br/>
                                                Service</span></h3>
                                        <h2>We can help</h2>
                                        <div class="video-gallery__right-content-btn-box">
                                            <a href="contact.html"
                                                class="thm-btn video-gallery__right-content-btn">contact us<span
                                                    class="fas fa-arrow-right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="video-gallery__right-sidebar-download">
                                    <h3>Download</h3>
                                    <a href="services-2.html" class="thm-btn video-gallery__download-btn">Download
                                        Brochure<span class="fas fa-arrow-down"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--Video Gallery End--> */}
<Footer/>
        </div>
  )
}

export default singleservice