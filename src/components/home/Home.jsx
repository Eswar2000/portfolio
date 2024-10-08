import './home.scss';
import Introduction from '../introduction/Introduction';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';
import Project from '../project/Project';

export default function Home() {
  return (
    <div className='sections'>
        <Introduction />
        <Skills />
        <Experience />
        <Project />
    </div>
  )
}
