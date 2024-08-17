import './experience.scss';
import Workcard from '../workcard/Workcard';

export default function Experience() {

  const cisco_ft = [
    "Worked on research and development of telemetry based network assurance solution, revolutionizing observability and saving $2 million in OPEX.",
    "Played key role throuout SDLC, actively participated in solution's architectural design, development of telemetry pipeline, containerizing and orchestrating applications, carrying out functional tests, deploying with Kubernetes and carrying forward incremental optimizations.",
    "Delivered several proof-of-concept solutions for customers, contributing to new business opportunities in ASEAN and AMERICA regions.",
    "Spearheaded the creation of automated test suite for functional testing, saving 50% in cost and time, now utilized across multiple projects.",
    "Received various innovation awards, including the prestigious OneExcellence and Stevie Gold awards for recognized contributions to projects."
  ]

  const cisco_intern = [
    "Earned Cisco Certified Network Associate and Cisco Developer Network Associate certifications to streamline network management and develop automation solutions.",
    "Contributed to development of a product that unifies DevOps tools through ChatOps, improving operational efficiency by 30%.",
    "Worked on research and development of GitHub, Prometheus and WebEx integrations with the solution.",
    "Received an innovation award for outstanding contributions to the project, recognized for driving significant advancements in team collaboration and automation."
  ]

  const teal_intern = [
    "Gained practical experience in database applications for monitoring power consumption, enhancing the understanding of data management within industrial settings.",
    "Learned SQL to effectively query and manage databases, to support the data analysis process."
  ]

  return (
    <div id='experience' className='experience'>
      <h2 className='section-header'>Experience</h2>
      <div className="experience-container">
        <Workcard company={"Cisco Systems"} role={"Software Consulting Engineer II"} duration={"August 2022 - Present"} image_path={"assets/cisco-logo.png"} work_list={cisco_ft}/>
        <Workcard company={"Cisco Systems"} role={"Technical Undergraduate Intern"} duration={"January 2022 - June 2022"} image_path={"assets/cisco-logo.png"} work_list={cisco_intern}/>
        <Workcard company={"Titan Engineering and Automation Limited"} role={"Intern"} duration={"December 2019 - January 2020"} image_path={"assets/teal-logo.jpg"} work_list={teal_intern}/>
      </div>
    </div>
  )
}
