import React from "react";
import Project from "./Project";

function Portfolio (){
  const projects = [
            {id:1,name:"SimpleSuds",imageName:"simpleSud.png",link:"https://simple-suds.herokuapp.com",gitURL:"https://github.com/bhumisha/laundromat",desc:"SimpleSuds connects customers to local laundromats that will pick up and return laundry clean, ironed, and folded."},
            {id:2,name:"Tech Blog",imageName:"TechBlog.png",link:"https://cms-tech-blog.herokuapp.com/",gitURL:"https://github.com/bhumisha/Tech-Blog",desc:"Tech-blog is CMS-style blog site where the user can create account and post their blog and also comments on other users blog."},
            {id:3,name:"Note Taker",imageName:"noteTaker.png",link:"https://notes-taker-feb21.herokuapp.com",gitURL:"https://github.com/bhumisha/NotesTaker",desc:"Note taker is collecting user's note information and storing into the file. User can add / view / delete notes from note dashboard."},
            {id:4,name:"Threes a Crowd",imageName:"ThreesaCrowd.png",link:"https://bhumisha.github.io/ThreesCrowd/index.html",gitURL:"https://github.com/bhumisha/ThreesCrowd",desc:"Three's A Crowd is card game where computer is palying with user"},
            {id:5,name:"Weather Report",imageName:"weatherReport.png",link:"https://bhumisha.github.io/WeatherDashboard/",gitURL:"https://github.com/bhumisha/WeatherDashboard",desc:"Weather Dashboard shows current weather data and forecast weather data for 5 days for search City/State/Country"},
            {id:6,name:"Horiseon",imageName:"horiseon.png",link:"https://bhumisha.github.io/Code-Refactor-Challenge/index.html",gitURL:"https://github.com/bhumisha/Challenge1",desc:"Refactor an existing site to make it more accessible / readable."}];                    

                  
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
            desc={projectObj.desc}
            key={projectObj.name}/>
      ))} 
    </div>
  </div> 
  )                          
};
export default Portfolio;
