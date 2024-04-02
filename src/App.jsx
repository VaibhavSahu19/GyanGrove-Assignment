import React from 'react'
import styles from "./App.module.css"
import Navbar from "./components/Navbar/Navbar"
import Upcoming from './components/Upcoming/Upcoming'
import Hero from "./components/Recommended/Hero/Hero"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Upcoming />
    </div>
  )
}

export default App