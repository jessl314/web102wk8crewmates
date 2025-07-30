import React from 'react'
import HumanoidSprites from "../assets/HumanoidSprites.png"
import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <div className="home">
                <h1>Welcome to the D&D Party Builder</h1>
                <h3>Here is where you can create your very own party of humanoids before sending them on their adventures!</h3>
                <img src={HumanoidSprites} alt="a display of all possible D&D characters that can be chosen"/>
                <br></br>
                <p>credits to: https://deepdivegamestudio.itch.io/humanoid-asset-pack</p>

            </div>
        </div>
    )
}

export default Home;