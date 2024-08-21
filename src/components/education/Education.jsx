import './education.scss';

export default function Education() {

  const education_list = [
    {
      "id": 1,
      "university_name": "TVS Academy",
      "university_degree": "Secondary Education",
      "univerisity_logo": "assets/tvs-hosur.jpg",
      "messages": [
        "Passed out on May, 2016",
        "Followed CBSE curriculum",
        "Holding a CGPA of 10 on a 10-grade scale"
      ]
    },
    {
      "id": 2,
      "university_name": "Maharishi Vidya Mandir",
      "university_degree": "Higher Secondary Education",
      "univerisity_logo": "assets/mvm-hosur.png",
      "messages": [
        "Passed out on May, 2018",
        "From computer science stream",
        "Holding a grade of 469 on a 500-mark scale"
      ]
    },
    {
      "id": 3,
      "university_name": "Amrita Vishwa Vidyapeetham",
      "university_degree": "Bachelor's of Technology",
      "univerisity_logo": "assets/amrita-cbe.png",
      "messages": [
        "Passed out with distinction on May, 2022",
        "From computer science department",
        "Holding a GPA of 9.57 on a 10-grade scale"
      ]
    }
  ];

  return (
    <div className='education'>
        <h2 className='section-header'>Education</h2>
        <div className="edu-container">
          {
            education_list && education_list.map(edu => {
              return (
                <div className="edu-card" key={edu.id}>
                  <div className="top">
                    <img className='university-img' src={edu.univerisity_logo} alt={edu.univerisity_name}/>
                    <h2 className='university-head'>{edu.university_name}</h2>
                  </div>
                  <div className="bottom">
                    <h2 className='edu-degree'>{edu.university_degree}</h2>
                    <ul className='edu-info'>
                      {
                        edu.messages && edu.messages.map((msg, ind) => {
                          return (
                            <li className='edu-item' key={ind}>{msg}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}
