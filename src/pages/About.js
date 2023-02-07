// import myImage from './images/me2';
import portraitCharacter from "../image/me2.png"


function About() {
    return (
        <>
        <h1>About me</h1>
        <img src={portraitCharacter} alt=""/>
        <p className="aboutMe">Hi there, I am Lotus. <br></br>I have been on a coding adventure, learning to code and to understand the processes
            involved in Web Development.<br></br> I have always found coding fascinating and 
            look forward to learning and developing my skills further through undertaking
            projects and creating webpages in react.
        </p>

        <p className="contactInfo">Checkout my github projects: </p>
        <a href="https://www.github.com/lotus-pocus">Github</a>
        <p className="contactInfo">Contact details:</p>
        <a href="https://www.linkedin.com/in/lotus-tay-06a89521/">LinkedIn</a>
        <a href="mailto:lotustay78@gmail.com">email</a>
        </>
    )
}

export default About;