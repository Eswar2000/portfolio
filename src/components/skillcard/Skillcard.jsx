import './skillcard.scss';

export default function Skillcard({domain, skill_list}) {
  return (
    <div className="skill-card">
        <div className='skill-head-container'>
            <div className="skill-head">
            {domain}
            </div>
        </div>
        <hr />
        <div className='skill-list'>
          {
            skill_list && skill_list.map((skill, index) => {
              return (
                <div className="skill-image" key={index}>
                    <img src={skill.image} alt={skill.name}/>
                    <h3>{skill.name}</h3>
                </div>
              )
            }) 
          }
        </div>
    </div>
  )
}
