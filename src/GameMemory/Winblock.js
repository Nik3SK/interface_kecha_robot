import React from "react";
import "./Winblock.css"
import photoforwinblock from "./imagesforGM/free-icon-celebration-7674761.png"
import Figure_6 from "../buttons/Figures/Figure_6";
import Figure_5 from "../buttons/Figures/Figure_5";
class Winblock extends React.Component{

    render()
    {
        return(
            <>
                <Figure_6 fill = "#96BCD6" transform="translate(-100 250)"/>

               <div id="textforwinblock">Ура!! Ты выиграл
                   <img src={photoforwinblock} alt="no" id="photoforwinblock"/>

               </div>

            </>
        )
    }
}
export default Winblock