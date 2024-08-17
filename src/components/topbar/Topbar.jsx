import './topbar.scss';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="container">
            <div className="left">
                <span className='banner'>Portfolio</span>
            </div>
            <div className="right">
                <a href='#introduction' className='nav-head'>Introduction</a>
                <a href='#skills' className='nav-head'>Skills</a>
                <a href='#experience' className='nav-head'>Experience</a>
                <a href='#projects' className='nav-head'>Projects</a>
            </div>
        </div>
    </div>
  )
}
