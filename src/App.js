import {Routes, Route} from 'react-router-dom';
import Project from './components/Project';
import Landing from './pages/Landing';
import About from './pages/About';
import Header from './components/Header';


// import myImage from './images/me2';

// Import data from data.json file



//import images from folder

// import image from "./image";

function App() {
  const title = "Portfolio";


  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      
      
    </>
  );
}

export default App;
