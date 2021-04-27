import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons'

function Project(props){
    return (
    
            <div className="project-grid">
                <img src={require(`../../assets/images/${props.imageName}`)} 
                  alt={props.name} className="projectImage"/>
                
                <div className="overlay">
                        <div className="overlayDiv">
                            <a href={props.link} >{props.name}</a>
                            <a href={props.gitUrl} rel="noopener noreferrer" target="_blank" >
                                    <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <p>{props.desc}</p>
                        </div>
                </div>
            </div>
          
    

    )
}

export default Project;