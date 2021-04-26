import React, { useState } from 'react';
import Navigation from './Navigation';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function Headers() {
  const [currentPage, setCurrentPage] = useState('About me');

  const renderPage = () => {
    switch (currentPage) {
        case 'About me': return <About/>
        case 'Portfolio': return  <Portfolio/>
        case 'Contact': return <Contact/>
        case 'Resume': return <Resume/>
        default :  return <About/>
    };
  }
  return (
    <header>
      <div className="header">
      <h2 className="bannerText">
          Bhumisha Dave
      </h2>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <section className="middleSection">
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </section>
      
    </header>
  );
}

export default Headers;
