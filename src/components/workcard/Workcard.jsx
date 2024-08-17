import './workcard.scss';

export default function Workcard({company, role, duration, image_path, work_list}) {
  return (
    <div className='work-card'>
      <div className="left-container">
        <img src={image_path} alt={company}/>
      </div>
      <div className="right-container">
        <div className='work-head'>
          <h2>{role} <span>{duration}</span></h2>
        </div>
        <div className="work-items">
          <ul className='work-item-list'>
            {
              work_list && work_list.map((work, index) => {
                return (
                  <li className='work-item' key={index}>{work}</li>
                )
              })
            }

          </ul>
        </div>
      </div>
    </div>
  )
}
