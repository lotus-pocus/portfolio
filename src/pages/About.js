// import myImage from './images/me2';
import portraitCharacter from "../image/me2.png"

function About() {
    return (
        <>
        <h1>About me</h1>
        <img src={portraitCharacter} alt=""/>
        <p className="aboutMe">I have been on a journey learning to code and to understand the processes
            involved in Web Development. I have always found coding fascinating and 
            look forward to learning and developing my skills further through undertaking
            projects and creating webpages in react.
        </p>
        </>
    )
}

export default About;