import {NavLink} from 'react-router-dom';
import logo from "../image/Logo.png";

function Header() {
    

    return (
        <header>
            <img className= "logoImg" src={logo} alt=""/>
            <nav>
                <NavLink to="./">Home</NavLink>
                <NavLink to="./about">About</NavLink>
                <NavLink to="../Project">Project</NavLink>
                <NavLink to="./Contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header;