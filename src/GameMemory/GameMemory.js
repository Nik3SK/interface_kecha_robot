import Cards from "./Cards";
import React from "react";
import photoforGM1 from "./imagesforGM/free-icon-card-game-3364995.png"
import Figure_7 from "../buttons/Figures/Figure_7";
import Figure_5 from "../buttons/Figures/Figure_5";
import {Link, Outlet} from "react-router-dom";
function GameMemory() {
    return (
        <>
            <svg id="fonforGM">

                <Figure_7 fill="#EBC200" transform="translate(100 40)"/>

            </svg>
                <Figure_5 fill="#96BCD6"  transform="translate(20 -200)"/>
            <h1 id="NameOfGameMemory">
                Найди пару
            </h1>
            <svg id="text1GameMemory">
                <text x="0" y="100" fontSize="65" fontFamily="PT Sans" fontWeight="bold" fill="white">(o^▽^o)</text>
            </svg>
            <img src={photoforGM1} alt="no" id="photoforGM1"/>
        <div id="GameMemoryboardpos">
            <Cards/>
        </div>
            <div id="BackforGameMemory">
                <Link id="linkbackGameMemory" to='/Mainmenu'>В главное<br/> меню</Link>
                <Outlet/>
            </div>
        </>
    );
}

export default GameMemory;