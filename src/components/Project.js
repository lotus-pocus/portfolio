function Project(props){
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.image} alt="project_image" />
            <br/>

            {props['Deployed page']}
          </div>
    )
}

export default Project;