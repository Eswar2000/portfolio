import './topbar.scss';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="container">
            <div className="left">
                <span className='banner'>Portfolio</span>
            </div>
            <div className="right">
                <a href='#/' className='nav-head'>Home</a>
                <a href='#/about' className='nav-head'>About</a>
            </div>
        </div>
    </div>
  )
}
