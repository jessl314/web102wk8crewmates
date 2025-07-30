import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="side-navbar">
            <h2>D&D Party</h2>
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/creator" className="nav-button">Create Character</Link>
            <Link to="/party" className="nav-button">Party Gallery</Link>

        </div>
    )
}

export default NavBar;