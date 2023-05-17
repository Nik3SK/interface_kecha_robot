import Cards from "./Cards";
import React from "react";
function GameMemory() {
    return (
        <>
            <svg id="fonforGM"> </svg>
        <div className="App">
            <h1>Memory Game</h1>
            <Cards/>
            {/*<div className="container"></div>*/}
        </div>
        </>
    );
}

export default GameMemory;