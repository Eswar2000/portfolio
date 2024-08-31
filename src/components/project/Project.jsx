import { useState } from 'react';
import './project.scss';

export default function Project() {

  const [sliderPosition, setSliderPosition] = useState(0);

  const project_list = [
    {
      "name": "Network Telemetry Simulator",
      "completion": "August 2023*",
      "image": "assets/telemetry-simulator-small.png",
      "description": "A network telemetry data simulator is a prototype being developed to address bottlenecks in project development and POCs caused by limited network devices or permissions. By using mathematical modeling and calibration, it generates realistic network traffic data, improving observability and testing capabilities for performance and security analysis.",
      "skills": ["NodeJS", "ExpressJS", "MongoDB", "YANG", "IOS-XR", "IOS-XE", "Gaussian Distribution", "Poisson Distribution"]
    },
    {
      "name": "Faculty Dashboard",
      "completion": "September 2021",
      "image": "assets/faculty-dashboard-small.png",
      "git_url": "https://github.com/Eswar2000/faculty-dashboard",
      "description": "A streamlined web application developed with the MERN stack, leveraging Agile methodologies and Scrum practices. This platform centralizes essential faculty tasks into a single interface—managing lecture schedules, student gate passes and leaves, and mentoring diaries. Its architectural design and streamlined processes have been shown to enhance efficiency by up to 30%.",
      "skills": ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Jira", "Agile", "Scrum", "SDLC", "Mocha Unit Testing", "Selenium UI Testing"]
    },
    {
      "name": "Conflict Network Evaluation",
      "completion": "April 2022",
      "image": "assets/conflict-network-small.png",
      "description": "Our project aims to develop a flexible framework for extracting, quantifying, and representing conflict events as networks. By analyzing social media interactions, especially on platforms like Twitter, we seek to identify patterns, quantify influences, and predict potential conflicts, providing insights into social dynamics.",
      "skills": ["Python", "Graph Networks", "Social Network Analysis", "Exploratory Data Analysis", "Sentiment Analysis", "ACLED", "Computational Social Science"]
    },
    {
      "name": "Note Maker",
      "completion": "June 2024",
      "image": "assets/note-maker-small.png",
      "git_url": "https://github.com/Eswar2000/notemaker",
      "description": "A versatile web application built with the MERN stack for managing notes and to-do lists. Users can create accounts to dynamically add and organize notes and checklists within their profiles. Collaboration is facilitated through customizable sharing permissions for individual notes. Stay tuned for exciting features like postcard options and more!",
      "skills": ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "SDLC"]
    },
    {
      "name": "Maze Game",
      "completion": "January 2022",
      "image": "assets/maze-game-small.png",
      "git_url": "https://github.com/Eswar2000/maze-game-racket",
      "description": "A coursework project developed using Racket to demonstrate various SICP concepts through an engaging maze game. Players navigate a protagonist from the source to the destination, overcoming obstacles and challenges to earn points. Successfully completing each level unlocks new, more complex mazes, with increasing difficulty.",
      "skills": ["Racket", "SICP"]
    },
    {
      "name": "Spotify Song Recommendation",
      "completion": "December 2021",
      "image": "assets/song-recommendation-small.png",
      "description": "A content-based filtering recommendation system that utilizes the Spotify songs dataset and cosine similarity to suggest relevant tracks. The system features enhanced accuracy through improved feature extraction and hybrid techniques, optimizing recommendation relevance and overall performance.",
      "skills": ["Python", "Kaggle", "Content-based filtering recommendation system", "Exploratory Data Analysis", "Data Imputation", "PCA", "Correlation Analysis", "Data Encoding", "Data Normalization"]
    },
    {
      "name": "Higher Studies Portal",
      "completion": "November 2021",
      "image": "assets/higher-studies-small.png",
      "git_url": "https://github.com/Eswar2000/higher-studies-portal",
      "description": "An integrated platform featuring a ReactJS frontend, Java backend, and MySQL database. This portal offers a range of tools to support prospective students, including forums for interaction with alumni, practice quizzes for GRE, GMAT, and TOEFL, and additional resources to facilitate preparation for higher education.",
      "skills": ["ReactJS", "Java", "MySQL", "HTML", "CSS", "Bootstrap"]
    },
    {
      "name": "ReachOut Social Media",
      "completion": "May 2021",
      "image": "assets/reach-out-small.png",
      "git_url": "https://github.com/Eswar2000/reach-out",
      "description": "A web application developed with Flask, simulating a social media platform to illustrate graph theory concepts. In this model, each user is represented as a vertex, and relationships between users are depicted as edges. This application effectively demonstrates various applications and use-cases of graph structures in a practical context.",
      "skills": ["Python", "Flask", "SQL Lite", "HTML", "Jinja Template", "Data Structures", "Algorithms", "Graphs", "Prims MST algorithm", "Floyd Warshall shortest path algorithm"]
    },
    {
      "name": "Smart Healthcare System",
      "completion": "November 2020",
      "image": "assets/smart-healthcare-small.png",
      "git_url": "https://github.com/Eswar2000/healthcare",
      "description": "A comprehensive software solution designed to enhance hospital management efficiency. This application features a robust database design, an intuitive user interface, and optimized algorithms to streamline patient navigation and support the hospital management team in delivering exceptional care.",
      "skills": ["JavaScript", "MySQL", "HTML", "CSS", "Bootstrap", "Database Design", "Normalization"]
    },
    {
      "name": "Graph Simulator",
      "completion": "Febraury 2021",
      "image": "assets/graph-simulator-small.png",
      "git_url": "https://github.com/Eswar2000/graph-vpython",
      "description": "A dynamic project showcasing the graphical representation of data structures, specifically graphs. Users can interactively build a graph by selecting vertices and connecting them with edges on a 2D canvas. Once constructed, the tool provides animated simulations of Dijkstra's algorithm for finding the shortest path between two points and Prims algorithm for generating the minimum spanning tree.",
      "skills": ["Python", "VPython", "Data Structures", "Algorithms", "Graphs", "Prims MST algorithm", "Dijkstra's shortest path algorithm"]
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
                    <div className="project-container" key={index}>
                      <div className="project">
                        <div className="project-left-container">
                          <div className="project-image">
                            <img className='project-img' src={project.image} alt={project.name}/>
                          </div>
                          <h2>{project.name}</h2>
                        </div>
                        <div className="project-right-container">
                            <p>{project.description}</p>
                            {
                              project.git_url && <a href={project.git_url} target='_blank' rel='noreferrer'>Github Link &#128275;</a>
                            }
                            {
                              !project.git_url && <a href='#' rel='noreferrer'>Github Link &#128274;</a>
                            }
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
