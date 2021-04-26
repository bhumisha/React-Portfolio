import React from 'react';

function Navigation(props) {
  const tabs = ['About me', 'Portfolio', 'Contact', 'Resume'];
  return (
      <nav>
        <ul className="flex-row">
            {tabs.map(tab => (
                <li className="mx-1" key={tab}>
                <a
                  href={'#' + tab.toLowerCase()}
                  onClick={() => props.setCurrentPage(tab)}
                  className={
                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                  }>
                  {tab}
                </a>
              </li>
            ))}
        </ul>
      </nav>
         

    



   
  );
}

export default Navigation;
