// Import data from data.json file
import project from './project.json';




function Project() {

  return (
    <main className='column'>

      <h1>Projects: </h1>
      <br></br>

      {/* Use the map() method to output a <div> for each project */}

      {project.map((Object, index) => {
        return (
          <div className="container" key={index}>
            <h3>{Object.name}</h3>
            <br></br>
            <img style={{width:'600px',height:'600px'}} src={require(`../image/image0${index + 1}.png`)} alt="project image"/>
            <br></br>
            <a href={Object.url} target="_blank">project</a>
          </div>
        )
      })}

    </main>
  )
}

export default Project;