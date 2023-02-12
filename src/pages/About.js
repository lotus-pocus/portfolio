
import portraitCharacter from "../image/me2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import background from "../image/background.png"


function About() {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat", backgroundSize: "cover",
            height: 1200
        }}>
            <h1 className="aboutMeTitle">About me</h1>
            <img className="aboutMeImg" src={portraitCharacter} alt="" />
            <p className="aboutMe">Hi there, I am Lotus. <br></br>I have been on a coding adventure, learning to code and to understand the processes
                involved in Web Development.<br></br> I have always found coding fascinating and
                look forward to learning and developing my skills further through undertaking
                projects and creating webpages in react.
            </p>

            <div className='contactInfo'>
                <h2>Checkout my github projects: </h2>
                <br></br>
                <a href="https://www.github.com/lotus-pocus">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <h2 style={{ marginTop: "40px" }}>Contact details:</h2>
                <a href="https://www.linkedin.com/in/lotus-tay-06a89521/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:lotustay78@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
    )
}

export default About;