import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons'

function Project(props){
    return (
    <div className="groupImage">  
            <div className="workgrid-item">
                {/* <a className="item-1" href={props.link}  target="_blank">  */}
                  <img src={require(`../../assets/images/${props.imageName}`)} className="projectImage"/>
                {/* </a> */}
                <div className="overlay">
                        <a href={props.link} className="icon">{props.name}`</a>
                        <a href={props.gitUrl} target="_blank" className="icon" >
                                <FontAwesomeIcon icon={faGithub} />
                        </a>  
                </div>
            </div>
          
    </div>

    )
}

export default Project;