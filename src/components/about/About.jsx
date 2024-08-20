import './about.scss';
import Personal from '../personal/Personal';
import Merits from '../merits/Merits';

export default function About() {
  return (
    <div className='sections'>
        <Personal />
        <Merits />
    </div>
  )
}
