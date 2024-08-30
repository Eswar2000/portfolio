import Skillcard  from '../skillcard/Skillcard';

import './skills.scss';

export default function Skills() {
  const programming_languages = [
    {"image": "assets/c-logo.png", "name": "C"},
    {"image": "assets/cpp-logo.png", "name": "C++"},
    {"image": "assets/csharp-logo.jpg", "name": "C#"},
    {"image": "assets/python-logo.png", "name": "Python"},
    {"image": "assets/java-logo.png", "name": "Java"},
    {"image": "assets/javascript-logo.jpg", "name": "JavaScript"}
  ]

  const web_development = [
    {"image": "assets/html-logo.jpg", "name": "HTML"},
    {"image": "assets/css-logo.jpg", "name": "CSS"},
    {"image": "assets/react-logo.png", "name": "React"},
    {"image": "assets/node-logo.jpg", "name": "Node"},
    {"image": "assets/sass-logo.jpg", "name": "Sass"},
    {"image": "assets/django-logo.jpg", "name": "Django"},
    {"image": "assets/express-logo.png", "name": "Express"},
    {"image": "assets/angular-logo.jpg", "name": "Angular"}
  ]

  const database = [
    {"image": "assets/mysql-logo.png", "name": "MySQL"},
    {"image": "assets/redis-logo.png", "name": "Redis"},
    {"image": "assets/mongo-logo.png", "name": "Mongo"},
    {"image": "assets/postgresql-logo.png", "name": "Postgres"}
  ]

  const miscellaneous = [
    {"image": "assets/linux-logo.png", "name": "Linux"},
    {"image": "assets/kafka-logo.png", "name": "Kafka"},
    {"image": "assets/spark-logo.png", "name": "Spark"},
    {"image": "assets/docker-logo.png", "name": "Docker"},
    {"image": "assets/aws-logo.jpg", "name": "AWS"},
    {"image": "assets/cypress-logo.jpeg", "name": "Cypress"},
    {"image": "assets/kubernetes-logo.png", "name": "Kubernetes"},
  ]
  
  return (
    <div id='skills' className='skills'>
      <h2 className='section-header'>Skills</h2>
      <div className='skills-container'>
        <Skillcard domain={"Programming Languages"} skill_list={programming_languages}/>
        <Skillcard domain={"Web Development"} skill_list={web_development}/>
        <Skillcard domain={"Databases"} skill_list={database}/>
        <Skillcard domain={"Miscellaneous"} skill_list={miscellaneous}/>
        </div>      
    </div>
  )
}
