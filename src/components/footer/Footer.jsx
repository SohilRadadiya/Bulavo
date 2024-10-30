/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import footer from "../../assets/images/icon/footer-icon-1.png";
import footer2 from "../../assets/images/icon/footer-icon-2.png";
import footer3 from "../../assets/images/icon/footer-icon-3.png";
import loge from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
    <div className="site-footer__top">
        <div className="container">
            <div className="site-footer__inner">
                <div className="site-footer__contact-info">
                    <ul className="site-footer__contact-points list-unstyled">
                        <li>
                            <div className="icon">
                                
                                <img src={footer} alt="footer" />
                            </div>
                          <div className="content">
                                <h4> GF-001 Mayuransh elanza shyamal cross road,</h4>
                                <p>satellite Ahemedabad</p>
                            </div>
                           

                        </li>
                        <li>
                            <div className="icon">
                             
                                <img src={footer2} alt="footer2" />
                            </div>
                            <div className="content">
                                <h4>Email us :</h4>
                                <a href="mailto:contact@bulavo.com">bulavoservices@gmil.com</a>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                               
                                <img src={footer3} alt="footer3" />
                            </div>
                            <div className="content">
                                <h4>Call us on :</h4>
                                <a href="tel:+9328939099">+91 9328939099</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="site-footer__middle">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                    <div className="footer-widget__column footer-widget__about">
                        <div className="footer-widget__logo">
                            <Link to="/"><img src={loge}  aria-label="bulavo" alt="bulavo"></img></Link>
                        </div>
                        <p className="site-footer__text">"Bulavo: Committed to excellence in home appliance service. Our expert technicians deliver prompt, quality repairs, putting your satisfaction at the forefront of everything we do."</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                    <div className="footer-widget__column footer-widget__useful-links">
                        <div className="footer-widget__title-box">
                            <h3 className="footer-widget__title">Useful Links</h3>
                        </div>
                        <ul className="footer-widget__useful-links-list list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                         
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                    <div className="footer-widget__column footer-widget__services">
                        <div className="footer-widget__title-box">
                            <h3 className="footer-widget__title">Our Services</h3>
                        </div>
                        <ul className="footer-widget__useful-links-list list-unstyled">
                            <li><Link to="/services">Refregerator</Link></li>
                            <li><Link to="/services">Mircorwave</Link></li>
                            <li><Link to="/services">Washing Machine</Link></li>
                            <li><Link to="/services">Cookware Stove</Link></li>
                            <li><Link to="/services">Juicer Mixer</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                    <div className="footer-widget__column footer-widget__newsletter">
                       
                        <div className="site-footer__social">
                            <a  aria-label="facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                          
                            <a  aria-label="instagram" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="site-footer__bottom">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">© Copyright <a href="#">BULAVO</a> 2024 . All
                            right reserved.</p>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="#"  aria-label="btn" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
</footer>
  );
};

export default Footer;
