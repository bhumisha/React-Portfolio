import React, { useState } from 'react';
import Navigation from './Navigation';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function Headers() {
  const [currentPage, handlePageChange] = useState('About me');

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
    <header className="flex-row px-1 ">
      <h2>
          Bhumisha Dave
      </h2>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <section className="contentWrapper">
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </section>
    </header>
  );
}

export default Headers;
