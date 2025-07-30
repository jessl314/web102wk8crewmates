import { useState } from 'react'
import HumanoidSprites from './assets/HumanoidSprites.png'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import CharacterBuilder from "./pages/CharacterBuilder"
import Party from "./pages/Party"
import CharDetail from "./pages/CharDetail"
import NavBar from "./components/NavBar"
import './App.css'

function App() {

  return (
    <Router>

        {loading && <p>Loading objects on display...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/creator" element={<CharacterBuilder/>}/>
          <Route path="/party" element={<Party/>}/>
          <Route path="/character/:id" element={<CharDetail/>}/>
        </Routes>
        )}
    </Router>
  )
}

export default App
