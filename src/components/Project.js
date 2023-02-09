// Import data from data.json file
import project from './project.json';




function Project() {

  return (
    <main className='projectStyle'>

      <h2>Projects: </h2>

      {/* Use the map() method to output a <div> for each project */}

      {project.map((Object, index) => {
        return (
          <div className="box">
            <h3>{Object.name}</h3>
            <br></br>
            <img src={`/image/image0${index + 1}.png`} alt="project image"/>
            <br></br>
            <a href={Object.url} target="_blank">project</a>
          </div>
        )
      })}

    </main>
  )
}

export default Project;