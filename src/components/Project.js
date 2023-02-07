// Import data from data.json file
import project from '../data/project.json';


function Project() {
    
    
    return (
        <main>

        <h2>Projects: </h2>

        <div className="project">
          {/* Use the map() method to output a <div> for each project */}

          {project.map((charobj, index) => (
          <Project 
            key={index} 
            name={charobj.name} 
            image={charobj.image} 
            deployed page={charobj['Deployed page']} />
            ))}
        
          </div>

      </main>
    )
}

export default Project;