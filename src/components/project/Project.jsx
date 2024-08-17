import { useState } from 'react';
import './project.scss';

export default function Project() {

  const [sliderPosition, setSliderPosition] = useState(0);

  const project_list = [
    {
      "name": "Faculty Dashboard",
      "completion": "September 2021",
      "image": "assets/faculty-dashboard-small.png",
      "git_url": "https://github.com/Eswar2000/faculty-dashboard",
      "description": "Faculty dashboard is a web application built using MERN stack, following Agile methodologies and Scrum framework. This platform unifies day-to-day activities of a regular faculty into a single pane of glass. Common activities include managing lecture schedules, gate passes & leaves for students and mentoring diary.",
      "skills": ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Jira", "Agile", "Scrum", "SDLC", "Mocha", "Selenium UI Testing"]
    },
    {
      "name": "Note Maker",
      "completion": "June 2024",
      "image": "assets/note-maker-small.png",
      "git_url": "https://github.com/Eswar2000/notemaker",
      "description": "Note-maker is a web application built using MERN stack. This app is used to manage notes and lists for remembrance. Users can create accounts and dynamically add notes and check lists to their profile. Users can as well share and collaborate with each other by giving permissions for specific notes. Wait a while, and you might even get post card options and many more!!",
      "skills": ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "SDLC"]
    },
    {
      "name": "Maze Game",
      "completion": "January 2022",
      "image": "assets/maze-game-small.png",
      "git_url": "https://github.com/Eswar2000/maze-game-racket",
      "description": "This is a coursework project built using racket to illustrate several SICP concepts at various levels through a classical maze gamet. The protoganist in the maze is to reach from the source to the destination overcoming obstacles and hindrances in order to gain points. On successfully completing each level, new mazes appear and difficulties increase proportionally.",
      "skills": ["Racket", "Structure and Interpretation of Computer Programming"]
    },
    {
      "name": "Higher Studies Portal",
      "completion": "November 2021",
      "image": "assets/higher-studies-small.png",
      "git_url": "https://github.com/Eswar2000/higher-studies-portal",
      "description": "This is a project built with ReactJS frontend, Java backend and MYSQL as database. The higher studies portal has various features to aid prospective students interact with alumnis over forums, take practice quizzes to ease their nerves for GRE, GMAT and TOEFL and many more to prepare students for higher studies.",
      "skills": ["ReactJS", "Java", "MySQL", "HTML", "CSS", "Bootstrap"]
    },
    {
      "name": "ReachOut Social Media",
      "completion": "May 2021",
      "image": "assets/reach-out-small.png",
      "git_url": "https://github.com/Eswar2000/reach-out",
      "description": "ReachOut is a web application built in Flask representing a social media. Social media is a typical example of graphs where every user is a vertex and relationships between two users is an edge. By using this social media model, applications and use-cases of graphs are illustrated in a meaningful way.",
      "skills": ["Python", "Flask", "SQL Lite", "HTML", "Jinja Template", "Data Structures", "Algorithms", "Graphs", "Prim's MST algorithm", "Floyd Warshall's shortest path algorithm"]
    },
    {
      "name": "Smart Healthcare System",
      "completion": "November 2020",
      "image": "assets/smart-healthcare-small.png",
      "git_url": "https://github.com/Eswar2000/healthcare",
      "description": "The Smart Healthcare System is software to manage hospitals in an efficient manner. This application follows high standards of database design, interactive user interface and efficient algorithms to help the patients navigate across hospital functionalities and the hospital management team to effectively serve people.",
      "skills": ["JavaScript", "MySQL", "HTML", "CSS", "Bootstrap", "Database Design"]
    },
    {
      "name": "Graph Simulator",
      "completion": "Febraury 2021",
      "image": "assets/graph-simulator-small.png",
      "git_url": "https://github.com/Eswar2000/graph-vpython",
      "description": "This is a project to demonstrate graphical representation of assigned data structure, graph. Users are allowed to dynamically build a graph by choosing vertices on a 2D screen and joining edges between them. Once the graph is ready, a graphical animated simulation starts to run illustrating Dijkstra's shortest path between 2 points selected and Prim's minimum spanning tree for the graph.",
      "skills": ["Python", "VPython", "Data Structures", "Algorithms", "Graphs", "Prim's MST algorithm", "Dijkstra's shortest path algorithm"]
    }
  ]

  const handleSlide = (direction) => {
    direction === "left" ? setSliderPosition(sliderPosition > 0 ? sliderPosition - 1 : project_list.length - 1) : setSliderPosition(sliderPosition < project_list.length - 1 ? sliderPosition + 1 : 0);
  }

  return (
    <div className='projects'>
        <h2 className='section-header'>Projects</h2>
        <div className='slider' style={{transform: `translateX(-${sliderPosition * 100}vw)`}}>
              {
                project_list && project_list.map((project, index) => {
                  return (
                    <div className="project-container">
                      <div className="project" key={index}>
                        <div className="project-left-container">
                          <div className="project-image">
                            <img src={project.image} alt={project.name}/>
                          </div>
                          <h2>{project.name}</h2>
                        </div>
                        <div className="project-right-container">
                            <p>{project.description}</p>
                            <a href={project.git_url} target='_blank' rel='noreferrer'>Github Link &rarr;</a>
                            <h3>{project.completion}</h3>
                            <div className="chip-list">
                              {
                                project.skills && project.skills.map((skill, ind) => {
                                  return (
                                    <div className="skill-chip" key={ind}>
                                    <div className="chip-content">
                                      {skill}
                                    </div>
                                  </div>
                                  )
                                })
                              }
                              
                            </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
        </div>
        <img src='assets/arrow-black.png' className='arrow left' alt='arrow left' onClick={() => handleSlide("left")}/>
        <img src='assets/arrow-black.png' className='arrow right' alt='arrow right' onClick={() => handleSlide("left")}/>
    </div>
  )
}
