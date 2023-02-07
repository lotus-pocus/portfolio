// Import data from data.json file
import project from '../data/project.json';
import projectImages from '../image/image01.png';


function Project() {


  return (
    <main>

      <h2>Projects: </h2>

      {/* Use the map() method to output a <div> for each project */}

      {project.map((charobj, index) => {
        return (
          <div key={index}>
            <h3>{charobj.name}</h3>
            <img src={projectImages} alt=""/>
            <p>{charobj['Deployed page']}</p>
          </div>
        )
      })}

    </main>
  )
}

export default Project;