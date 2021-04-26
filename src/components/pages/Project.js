import React from 'react';

function Project(props){
    return (
    <div className="groupImage">  
            <div className="workgrid-item ">
                <a className="item-1" href={props.link}  target="_blank"> 
                  <img src={require(`../../assets/images/${props.imageName}`)} />
                </a>
            </div>
          
    </div>

    )
}

export default Project;