import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons'

function Project(props){
    return (
    
            <div className="project-grid">
                <img src={require(`../../assets/images/${props.imageName}`)} 
                  alt={props.name} className="projectImage"/>
                
                <div className="overlay">
                        <a href={props.link} className="icon">{props.name}`</a>
                        <a href={props.gitUrl} rel="noopener noreferrer" target="_blank" className="icon"  >
                                <FontAwesomeIcon icon={faGithub} />
                        </a>  
                </div>
            </div>
          
    

    )
}

export default Project;