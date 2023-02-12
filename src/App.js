import {Routes, Route} from 'react-router-dom';
import Project from './components/Project';
import Landing from './pages/Landing';
import About from './pages/About';
import Header from './components/Header';
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

//import images from folder

// import image from "./image";

function App() {
 
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        
        <Footer />
    </>
  );
}

export default App;
