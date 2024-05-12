import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import information from './data/information';
import Hero from './components/Hero';
import ProjectCard from "./components/ProjectCard";
import { useInView } from "react-intersection-observer";
import projects from "./data/projects";
import { motion, useAnimation } from "framer-motion";
import Skill from './components/Skill';
import skills from './data/skills';
import Heading from "./components/Heading";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <Navbar
      firstName = {information.userData.firstName}
      lastName = {information.userData.lastName}
      />
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />  
      <div className="hr"></div>

<section id="projects">
  <Heading firstWord="My" secondWord="Projects" />
  <motion.div
    className="project-map"
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={containerVariants}
  >
    {projects.map((project, index) => (
      <div key={index}>
        <ProjectCard
          name={project.name}
          img={project.img}
          description={project.description}
          source={project.sourceCode}
          preview={project.preview}
        />
      </div>
    ))}
  </motion.div>
</section>
<section id="skills">
        <Heading firstWord="Skills" secondWord="&Tools" />
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>
      < Footer />
    </>
  )
}

export default App


/*
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React and Abdul. ngl this is cool</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      */