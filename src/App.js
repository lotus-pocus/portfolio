import {Routes, Route} from 'react-router-dom';
import Project from './components/Project';
import Landing from './pages/Landing';
import About from './pages/About';
import Header from './components/Header';
import Contact from "./pages/Contact";

//import images from folder

// import image from "./image";

function App() {
 
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
        
    </>
  );
}

export default App;
