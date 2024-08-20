import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './app.scss';
import Topbar from './components/topbar/Topbar';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="app">
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
