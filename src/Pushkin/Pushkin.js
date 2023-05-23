import React from "react";
import "./Pushkin.css"
import PlyamWeather from "../buttons/Figures/Figure_10";
import photo1 from "./Pyshkin.jpg"
import photo2 from "./RuslanandLudmila.jpg"
import photo3 from "./AboutFishandFisher.jpg"
import photo4 from "./aboutTsarSaltan.jpg"
import photo5 from "./free-icon-swan-9161372.png"
import photo6 from "./Lukomorye.jpg"
import photo7 from "./frog.png"
import photo8 from "./goldfish.png"
import Figure_7 from "../buttons/Figures/Figure_7";
import Figure_6 from "../buttons/Figures/Figure_6";
import Figure_1 from "../buttons/Figures/Figure_1";
import Logo from "../buttons/Logos/LogoVar_1";
import Gradient2yellow from "../buttons/Gradientscircle/Gradient2yellow";
class Pushkin extends React.Component{

    render()
    {
        return(
            <>
                <svg id="fonforPushkin">
                    <Figure_7 fill="white" transform='translate(100 200)'/>
                    <Figure_6 fill="#EBC200" transform='translate(-340 200)'/>
                    <Figure_6 fill="#EBC200" transform='translate(-120 550)'/>
                    <Figure_6 fill="#EBC200" transform='translate(70 900)'/>
                    <Logo fill="green" transform='translate(40 1700)'/>
                    <Figure_1 fill="#f1f9fe" transform='translate(50 -180)'/>
                    <Figure_1 fill="white" transform='translate(770 -90)'/>
                    <Gradient2yellow transform='translate(450 -230)'/>
                </svg>
                <svg id="Pyshkintext1">
                    <text x="100" y="70" fontSize="39" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">
                        Александр Сергеевич Пушкин - писатель,
                    </text>
                    <text x="50" y="120" fontSize="39" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">
                        который стал величайшим национальным русским
                    </text>
                    <text x="50" y="170" fontSize="39" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">
                        поэтом. Пушкин написал 783 стихотворения,
                    </text>
                    <text x="50" y="220" fontSize="39" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">
                        но конечно все с детства
                    </text>
                    <text x="180" y="270" fontSize="39" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">
                        помнят сказки
                    </text>
                </svg>

                <img src={photo1} alt='no' id="imagePysh" />
                <img src={photo2} alt='no' id="imageRL"/>
                <img src={photo3} alt='no' id="imageFF"/>
                <img src={photo4} alt='no' id="imageTS"/>
                <img src={photo5} alt='no' id="imageSWAN"/>
                <img src={photo6} alt='no' id="imageLukMore"/>
                <img src={photo7} alt='no' id="imagefrog"/>
                <img src={photo8} alt='no' id="imagefish"/>
                <svg id="Pyshkintext2">
                    <text x="40" y="80" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">
                        Руслан
                    </text>
                    <text x="80" y="140" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">
                        и
                    </text>
                    <text x="40" y="200" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">
                        Людмила
                    </text>
                </svg>
                <svg id="Pyshkintext3">
                    <text x="80" y="100" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">
                        Сказка
                    </text>
                    <text x="80" y="160" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">
                        о рыбаке
                    </text>
                    <text x="80" y="220" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">
                        и рыбке
                    </text>
                </svg>
                <svg id="Pyshkintext4">
                    <text x="80" y="100" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">
                        Сказка
                    </text>
                    <text x="100" y="160" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">
                        о царе
                    </text>
                    <text x="80" y="220" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">
                        Салтане
                    </text>
                </svg>
            </>
        )
    }
}
export default Pushkin