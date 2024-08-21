import {HashRouter, Routes, Route} from 'react-router-dom';
import './app.scss';
import Topbar from './components/topbar/Topbar';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="app">
      <Topbar />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
