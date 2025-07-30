// src/components/Project.js
import project from "./project.json";

function Project() {
  return (
    <main className="column">
      <h1>Projects:</h1>
      <br />
      <p>Scroll down to have a look at some of my projects.</p>
      <br />

      {project.map((Object, index) => (
        <div className="container" key={index}>
          <h2 style={{ color: "grey" }}>{Object.name}</h2>
          <br />
          {/* Direct path to image in /public/images/ */}
          <img
            className="projectImg"
            style={{ width: "800px", height: "600px" }}
            src={`${process.env.PUBLIC_URL}${Object.image}`}
            alt={`Project: ${Object.name}`}
          />

          <br />
          <a href={Object.url} target="_blank" rel="noopener noreferrer">
            View project
          </a>
          <br />
          {/* Optional: Show description if present */}
          {Object.description && (
            <>
              <br />
              <p>{Object.description}</p>
            </>
          )}
        </div>
      ))}
    </main>
  );
}

export default Project;
