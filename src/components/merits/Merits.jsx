import Awardlist from '../awardlist/Awardlist';
import './merits.scss';
import { useEffect, useState } from 'react';


export default function Merits() {

    const [selected, setSelected] = useState("Academia");
    const [awardData, setAwardData] = useState([]);


    const award_list = ["Academia", "Professional", "Certifications", "Extra-Curricular", "Social-Outreach"];

    useEffect(() => {
        const academic_list = [
            {
                "id": 1,
                "title": "Passed with Distinction",
                "message": "Bachelor's of Technology in Computer Science",
                "image": "assets/academic-award.jpg"
            },
            {
                "id": 2,
                "title": "6th rank in CS bachelor's",
                "message": "Top 2% in the department",
                "image": "assets/academic-award.jpg"
            },
            {
                "id": 3,
                "title": "Amrita Vidyanidhi Merit Scholarship",
                "message": "Waiver of 90% of tuition fee honing to academic excellence",
                "image": "assets/monetory-award.jpg"
            },
            {
                "id": 4,
                "title": "329th place out of 7000 participants worldwide",
                "message": "Amazon Splash ML Hackathon",
                "image": "assets/participation-award.jpg"
            },
            {
                "id": 5,
                "title": "Participation in Live in labs course",
                "message": "Exposure of youth to problems faced by rural parts of India",
                "image": "assets/community-award.jpg"
            }
        ];
        const extra_curricular_list = [
            {
                "id": 1,
                "title": "School Criket Team",
                "message": "Participation in inter-school tournaments",
                "image": "assets/participation-award.jpg"
            },
            {
                "id": 2,
                "title": "School Kabaddi Team",
                "message": "Qualified for quarter-finals in consecutive southern cluster tournaments",
                "image": "assets/standard-award.jpg"
            },
            {
                "id": 3,
                "title": "School Football Team",
                "message": "Participation in southern clusters tournament",
                "image": "assets/participation-award.jpg"
            },
            {
                "id": 4,
                "title": "Cisco's SAO department Basketball Team",
                "message": "Qualified for quarter-finals in PSCF tournament",
                "image": "assets/standard-award.jpg"
            },
            {
                "id": 5,
                "title": "Cisco's SAO department Volleyball Team",
                "message": "Runner up in PSCF tournament",
                "image": "assets/standard-award.jpg"
            },
            {
                "id": 6,
                "title": "Cisco's SAO department EIG Cricket Team",
                "message": "Participation in PSCF tournament, managed scoring a 50",
                "image": "assets/participation-award.jpg"
            },
            {
                "id": 7,
                "title": "Amrita's Rainbow Six Siege Esports Tournament",
                "message": "Qualified for quarter-finals in 5v5 FPS shooting game",
                "image": "assets/standard-award.jpg"
            },
            {
                "id": 8,
                "title": "Amrita's Gokulashtami Cultural Fest",
                "message": "CSE department was runner up in overall float procession",
                "image": "assets/standard-award.jpg"
            }
        ];
        const social_outreach_list = [
            {
                "id": 1,
                "title": "Lake Cleaning Organized by Rotary Club",
                "message": "Ram-Naickan lake cleaning at Hosur",
                "image": "assets/community-award.jpg"
            },
            {
                "id": 2,
                "title": "Sapling Distribution",
                "message": "TVS Academy school initiative",
                "image": "assets/community-award.jpg"
            },
            {
                "id": 3,
                "title": "Bottle Bench Creation",
                "message": "Recycling plastic waste to rebuild as infrastructure",
                "image": "assets/community-award.jpg"
            },
            {
                "id": 4,
                "title": "Karunashreya Awareness Program",
                "message": "Pulmonary disease support awareness camp through Cisco CSR",
                "image": "assets/community-award.jpg"
            },
            {
                "id": 5,
                "title": "Audio Book and Study Material Creation",
                "message": "For visually impaired students through Cisco CSR",
                "image": "assets/community-award.jpg"
            },
            {
                "id": 6,
                "title": "Plastic Collection Awareness Program",
                "message": "Procured plastic waste across various parts of Hosur for recycling",
                "image": "assets/community-award.jpg"
            }
        ];
        const professional_list = [
            {
                "id": 1,
                "title": "Connected Recognition, ChatOps Engine",
                "message": "R&D on Github, Webex, Prometheus integrations with ChatOps engine",
                "image": "assets/standard-award.jpg"
            },
            {
                "id": 2,
                "title": "Connected Recognition, Automated Testing",
                "message": "Recognized efforts for adoption of automated solutions",
                "image": "assets/standard-award.jpg"
            },
            {
                "id": 3,
                "title": "Cisco One Excellence Award",
                "message": "Revolutionizing NetOps and observability, saving $2 million in OPEX",
                "image": "assets/monetory-award.jpg"
            },
            {
                "id": 4,
                "title": "Stevie Gold Award",
                "message": "Revolutionizing NetOps and observability, saving $2 million in OPEX",
                "image": "assets/standard-award.jpg"
            },
            {
                "id": 5,
                "title": "Connected Recognition, POC Success",
                "message": "Taking up responsibilities and driving POCs successfully",
                "image": "assets/standard-award.jpg"
            }
        ];
        const certification_list = [
            {
                "id": 1,
                "title": "Cisco Certified Network Associate",
                "message": "Expires 17th Febraury, 2025",
                "image": "assets/certificate-award.jpg"
            },
            {
                "id": 2,
                "title": "Cisco Certified Developer Networking Associate",
                "message": "Expires 23rd July, 2025",
                "image": "assets/certificate-award.jpg"
            },
            {
                "id": 3,
                "title": "AWS Certified Solutions Architect Associate",
                "message": "Expires on 19th May, 2027",
                "image": "assets/certificate-award.jpg"
            },
            {
                "id": 4,
                "title": "AWS Certified Cloud Practitioner",
                "message": "Expired. Renewed through earning higher grade AWS certificate",
                "image": "assets/certificate-award.jpg"
            },
            {
                "id": 5,
                "title": "Cisco's GenAI Greenbelt",
                "message": "Non expiring certificate",
                "image": "assets/certificate-award.jpg"
            }
        ];

        switch (selected) {
            case "Academia":
                setAwardData(academic_list);
                break;
            case "Certifications":
                setAwardData(certification_list);
                break;
            case "Professional":
                setAwardData(professional_list);
                break;
            case "Extra-Curricular":
                setAwardData(extra_curricular_list);
                break;
            case "Social-Outreach":
                setAwardData(social_outreach_list);
                break;
            default:
                setAwardData(academic_list);
                break;
        }
    }, [selected])

    return (
        <div className='merits' id='merits'>
            <h2 className='section-header'>Awards, Merits, Honours and Certificates</h2>
            <ul>
                {
                    award_list && award_list.map((award) => {
                        return (
                            <Awardlist title={award} active={selected === award} setSelected={setSelected}/>
                        )
                    })
                }
            </ul>
            <div className="merit-container">
                {
                    awardData && awardData.map((award, ind) => {
                        return (
                            <div className="merit-item" key={ind}>
                                <img className='merit-type-image' src={award.image} alt={award.title} />
                                <div className="merit-message">
                                    <h3>{award.title}</h3>
                                    <p>{award.message}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
                
            </div>
        </div>
    )
}
