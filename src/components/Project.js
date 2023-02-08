// Import data from data.json file
import project from '../data/project.json';




function Project() {


  return (
    <main className='projectStyle'>

      <h2>Projects: </h2>

      {/* Use the map() method to output a <div> for each project */}

      {project.map((Object, index) => {
        return (
          <div key={index.id}>
            <h3>{Object.name}</h3>
            <img style={{width:'auto',height:'auto'}} src={Object.image} alt="project image"/>
            <a href={Object.url} target="_blank">project</a>
          </div>
        )
      })}

    </main>
  )
}

export default Project;