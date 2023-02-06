import './App.css';
import Project from './components/Project';

// Import data from data.json file

import project from './data.json';

//import images from folder

// import image from "./image";

function App() {
  const title = "Portfolio";

  return (
    <>
      <header title={title} />

      <main>

        <h2>Projects: </h2>

        <div className="project">
          {/* Use the map() method to output a <div> for each project */}

          {project.map((charobj, index) => <Project key={index} name={charobj.name} 
            image={charobj.image} deployed page={charobj['Deployed page']} />)}
        
          </div>

      </main>
    </>
  );
}

export default App;
