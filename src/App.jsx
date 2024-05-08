import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import information from './data/information';
import Hero from './components/Hero';
import Heading from "./components/Heading";

function App() {
  
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