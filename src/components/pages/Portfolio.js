import React from "react";
import Project from "./Project";

function Portfolio (){
  const projects = [
            {id:1,name:"SimpleSuds",imageName:"simpleSuds.png",link:"https://simple-suds.herokuapp.com",gitURL:"https://github.com/bhumisha/laundromat"},
            {id:2,name:"Threes a Crowd",imageName:"ThreesaCrowd.png",link:"https://bhumisha.github.io/ThreesCrowd/index.html",gitURL:"https://github.com/bhumisha/ThreesCrowd"},
            {id:3,name:"Weather Report",imageName:"weatherReport.png",link:"https://bhumisha.github.io/WeatherDashboard/",gitURL:"https://github.com/bhumisha/WeatherDashboard"},
            {id:4,name:"Calculator",imageName:"calc.png",link:"",gitURL:""},
            {id:5,name:"Horiseon",imageName:"horiseon.png",link:"https://bhumisha.github.io/Code-Refactor-Challenge/index.html",gitURL:"https://github.com/bhumisha/Challenge1"}];                    

                  
  return (
    <div className="contentDetail">
    <h4>Portfolio</h4>
    <br></br>
      <div className="workgrid-wrapper">
      {
        projects.map(projectObj => (
          <Project 
            name={projectObj.name} 
            imageName={projectObj.imageName} 
            link={projectObj.link} 
            gitUrl={projectObj.gitURL} 
            key={projectObj.name}/>
      ))} 
    </div>
  </div> 
  )                          
};
export default Portfolio;
