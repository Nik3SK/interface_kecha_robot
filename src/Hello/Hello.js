import React from "react";
import "./Hello.css"
import Face_var2 from "../buttons/Faces/face_var2";
import Gradient2yellow from "../buttons/Gradientscircle/Gradient2yellow";
import Logo from "../buttons/Logos/LogoVar_1";
class Hello extends React.Component{

    render()
    {
        return(
            <>
                <svg id="fonforHello">
                    <Gradient2yellow transform="translate(-100 710)"/>
                    <Face_var2 transform="translate(-100 880)"/>
                    <ellipse fill = "#2c3370" cx="837.88" cy="819.43" rx="55.37" ry="53.26"/>
                    <ellipse fill = "#2c3370" cx="764.71" cy="906.64" rx="32.6" ry="31.36"/>
                    <ellipse fill = "#2c3370" cx="756.2" cy="540.13" rx="212.95" ry="223.45"/>
                    <Logo fill="white" transform='translate(670 550)'/>
                </svg>
                <svg id="text1forHello">
                    <text x="100" y="120" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">
                        Привет,
                    </text>
                    <text x="50" y="190" fontSize="59" fontFamily="PT Sans" fontWeight="bold" fill="white">
                         я
                    </text>
                    <text x="50" y="170" fontSize="39" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">

                    </text>
                    <text x="70" y="220" fontSize="39" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">

                    </text>
                    <text x="180" y="270" fontSize="39" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">

                    </text>
                </svg>


            </>
        )
    }
}
export default Hello