import './about.scss';
import Personal from '../personal/Personal';
import Merits from '../merits/Merits';
import Education from '../education/Education';

export default function About() {
  return (
    <div className='sections'>
        <Personal />
        <Education />
        <Merits />
    </div>
  )
}
