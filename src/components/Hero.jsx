import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import socials from "../data/socials";
import Heading from "./Heading";
import MyHero from '../assets/react.svg';


const Hero = (props) =>{
    return (
        <div className="container">
            <motion.div
            initial = {{scale:0}}
            animate = {{ rotate: 360, scale:1}}
            transition = {{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
            whileHover = {{
                 scale: 1.3,
                 rotate: 10
                }}
            whileTap ={{
                scale:  0.8,
                rotate: 180,
                borderRadius: "100%",
            }}
            className = "pfp"
            >
                <img src={MyHero} alt="" />
            </motion.div>
            <Heading firstWord="Who" secondWord="AmI?" />
            <div className="hero--typewriter">
                <h3>I am</h3>
                <Typewriter
                options = {{
                    strings : [
                        "An Frontend Developer",
                        "An IT Enthusiast",
                        "A Wordpress Developer",
                        "A Gradaute",
                    ],
                    autostart: true,
                    loop: true,
                }}
                className="typewriter"
                />
            </div>
            <div className="hero-text">
                <p className="hero--desc">{props.description}</p>
            </div>
            <br />
            <br />
            Contact me on:
            <div className="hero--socials">
                {socials.map((social, index) =>(
                    <a key={index} href={social.url}>
                        <img src={`/social/${socials.icon}`} alt="" />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Hero;

Hero.PropTypes = {
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};