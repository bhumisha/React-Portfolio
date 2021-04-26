import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,faLinkedin,faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import React from 'react';

function Footer(){
    return (
        <footer>
            <a href="https://github.com/bhumisha" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/bhumisha-dave-3a163813/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://stackoverflow.com/users/7071708/bhdave" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} /></a>
        </footer>
    );

}

export default Footer;