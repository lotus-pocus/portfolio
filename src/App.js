import './App.css';

// Import data from data.json file

import project from './data.json';

//import images from folder

// import image from "./image";

function App() {
  const title= "Portfolio";

  return (
    <>
      <header title={title} />

      <main>

        <h2>Projects: </h2>

        <div className="box">
      {/* Use the map() method to output a <div> for each project */}

      {project.map((charobj, index) => {
        return (
          <div key={index}>
            <h3>{charobj.name}</h3>
            <img src={charobj.image} alt="project_image" />
            <br/>

            {charobj['Deployed page']}
          </div>
        )
      })}
        </div>
        
      </main>
    </>
      
  
  );
}

export default App;
