import React from 'react'
import styles from "./App.module.css"
import Navbar from "./components/Navbar/Navbar"
import Middle from './components/Recommended/Middle'

function App() {
  return (
    <div>
      <Navbar />
      <Middle />
    </div>
  )
}

export default App