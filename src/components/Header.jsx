import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';  
import logo from '../assets/img/logo.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const menuItems = [
    { name: 'Home', path: '/' },           
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Become a Partner', path: '/patner' }
  ];

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    
    if (isSticky) {
      return { 
        color: isActive ? '#f1d551' : 'white',
        transition: 'color 0.3s ease'
      };
    }
    return {
      color: isActive ? '#f1d551' : (isHomePage ? 'white' : 'white'),
      transition: 'color 0.3s ease'
    };
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main-header ${isSticky ? 'sticky' : ''}`} style={{
        position: isSticky ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        background: isSticky ? 'black' : 'transparent',
        transition: 'background 0.3s ease, top 0.3s ease', 
        zIndex: 1000,
        marginTop: isSticky ? '-32px' : '',
      }}>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <div className="main-menu__main-menu-box">
                  <div className="main-menu__main-menu-box-inner">
                    <a 
                      href="#" 
                      className="mobile-nav__toggler" 
                      onClick={toggleSidebar}
                      style={getLinkStyle('/')}
                       aria-label="Open menu"
                    >
                      <i style={{color:'#f1d551'}}className="fa fa-bars"></i>
                    </a>
                    <ul className="main-menu__list">
                      {menuItems.map((item, index) => (
                        <li className="dropdown" key={index}>
                          <Link 
                            to={item.path}
                            style={{ ...getLinkStyle(item.path), fontWeight: 'bold' }} 
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="main-menu__right">
                <div style={{backgroundColor: 'white'}} className="main-menu__call">
                  <div className="main-menu__call-icon">
                    <span className="icon-telephone"></span>
                  </div>
                  <div className="main-menu__call-content">
                    <p className="main-menu__call-sub-title">Need help? Talk to an expert</p>
                    <h4 className="main-menu__call-number">
                      <a  aria-label="phonenumber" href="tel:+9328939099">+91 9328939099</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="stricky-header stricked-menu main-menu main-header--dark">
          <div className="sticky-header__content"></div>
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '300px',
          background: '#0b1a3a',
          color: 'white',
          padding: '20px',
          transition: 'transform 0.3s ease',
          zIndex: 1000
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ width: '80%', marginBottom: '20px' }} />
            </Link>
            <button 
              onClick={toggleSidebar} 
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer'
              }}>
              x
            </button>
          </div>
          
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginTop: '20px'
          }}>
            {menuItems.map((item, index) => (
              <li key={index} style={{ margin: '15px 0', borderBottom: '1px solid #555', paddingBottom: '10px', position: 'relative' }}>
                <Link 
                  to={item.path} 
                  onClick={toggleSidebar} 
                  style={{
                    padding: '2px',
                    color: location.pathname === item.path ? '#f1d551' : 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingRight: '5px',
                    transition: 'color 0.3s ease'
                  }}>
                  {item.name}
                  {/* <span style={{
                    display: 'inline-block',
                    width: '30px',
                    height: '30px',
                    color: 'white',
                    borderRadius: '2px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '10px',
                    backgroundColor: location.pathname === item.path ? '#f1d551' : '#555'
                  }}>&gt;</span> */}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{
            marginTop: 'auto',
            paddingTop: '10px',
          }}>
            <p style={{ color: 'white', marginBottom: '10px' }}>Phone: <a href="tel:+9328939099" style={{ color: 'white' }}>+91 9328939099</a></p>
            <p style={{ color: 'white', marginBottom: '10px' }}>Email: <a href="mailto:info@example.com" style={{ color: 'white' }}>info@example.com</a></p>
            <a href="#" style={{ marginRight: '10px' }}>
              <i className="fab fa-instagram" style={{ color: '#f1d551' }}></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" style={{ color: '#f1d551' }}></i>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;