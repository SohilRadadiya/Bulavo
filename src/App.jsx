// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Blog from './pages/blog.jsx';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import PerLoader from './components/PerLoader';
// import Singleservice from './pages/Singleservice.jsx';

// const AppContent = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     // Set loading to true immediately when location changes
//     setIsLoading(true);

//     // Start a new timer
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     // Cleanup timer on location change or component unmount
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [location.pathname]); // Only trigger on pathname changes

//   // If loading, show only the loader
//   if (isLoading) {
//     return <PerLoader />;
//   }

//   // Once loading is complete, show the routes
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/blog" element={<Blog />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/singleservice" element={<Singleservice/>} />
//     </Routes>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect, Suspense, lazy } from 'react'; 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PerLoader from './components/PerLoader';
import CustomCursor from './components/CustomCursor'; 
import Popup from  './components/Popup.jsx'
// Import the Popup component

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Blog = lazy(() => import('./pages/blog.jsx'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Singleservice = lazy(() => import('./pages/Singleservice.jsx'));
const Blogs = lazy(() => import('./pages/Blogs.jsx'));
const Patner = lazy(() => import('./pages/Patner.jsx'));

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  useEffect(() => {
    const currentPath = location.pathname;
    const isPopupClosed = localStorage.getItem(`popupClosed-${currentPath}`) || localStorage.getItem('popupClosed-blog');
  
    // Check if the current path is exactly '/blog'
    const isBlogMainPage = currentPath === '/blog';
  
    // Exclude the popup for /contact and /patner pages
    if (!isPopupClosed && currentPath !== '/contact' && currentPath !== '/patner') {
      if (isBlogMainPage) {
        const popupTimer = setTimeout(() => {
          setShowPopup(true);
        }, 10000); // Show popup after 10 seconds
  
        return () => clearTimeout(popupTimer);
      } else {
        // Handle other pages if needed
        const otherPopupTimer = setTimeout(() => {
          setShowPopup(true);
        }, 10000); // Show popup after 10 seconds
  
        return () => clearTimeout(otherPopupTimer);
      }
    }
  }, [location.pathname]); // Reset on path change
  
  const handleClosePopup = () => {
    const currentPath = location.pathname;
    setShowPopup(false);
  
    // Store in local storage for the Blog main page
    if (currentPath === '/blog') {
      localStorage.setItem('popupClosed-blog', 'true');
    } else {
      // Store in local storage for other pages
      localStorage.setItem(`popupClosed-${currentPath}`, 'true');
    }
  };
  
  if (isLoading) {
    return <PerLoader />;
  }
  

  return (
    <>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Suspense fallback={<PerLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/singleservice" element={<Singleservice />} />
          <Route path="/blog/:slag" element={<Blogs />} />
          <Route path="/patner" element={<Patner />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <CustomCursor /> 
      <AppContent />
    </Router>
  );
};

export default App;
