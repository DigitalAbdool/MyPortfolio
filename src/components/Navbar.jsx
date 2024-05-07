import PropTypes from "prop-types";

import "../App.css";


const Navbar = (props) => { 
    return(
        <header className="header">
            <nav>
                <div className="nav--logo">
                    <a href="index.html">
                        {props.firstName}
                        <span>{props.lastName}</span>
                    </a>
                </div>
                <input type="checkbox" id="menu--toggle" />
                <label htmlFor="menu--toggle" className="menu--icon">
                    &#9776;
                </label>
                <ul className="menu--items">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="navbar-btn">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

Navbar.PropTypes = {
    firstName: PropTypes.string.isRequired,
    lastname:PropTypes.string.isRequired,
}
export default Navbar;