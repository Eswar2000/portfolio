import Topbar from './components/topbar/Topbar';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Introduction from './components/introduction/Introduction';
import Skills from './components/skills/Skills';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      
      <div className="sections">
        <Introduction />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
