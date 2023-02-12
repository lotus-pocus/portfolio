
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import background from "../image/background.png"

function contact() {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat", backgroundSize: "cover",
      height: 1200
  }}>
      <h1 className="contactTitle">Contact </h1>
      <p>If you would like to get in-touch and find out more about what I do or 
        what I can do, please send me a message on LinkedIn or send me an email. </p>

      <br></br>
      <div className='contactInfo'>
        <h2>Checkout my github projects: </h2>
        <br></br>
        <a href="https://www.github.com/lotus-pocus">
        <FontAwesomeIcon icon={faGithub} className="github" />
        </a>
        <h2 style={{marginTop:"40px"}}>Contact details:</h2>
        <a href="https://www.linkedin.com/in/lotus-tay-06a89521/">
        <FontAwesomeIcon icon={faLinkedin} className="linkedIn"/>
        </a>
        <a className="email" href="mailto:lotustay78@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default contact;