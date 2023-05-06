import React from "react";
import "./component2.css";
import Face_var2 from "../buttons/Faces/face_var2";
import Logo from "../buttons/Logos/LogoVar_1";
import Gradient2 from "../buttons/Gradientscircle/Gradient2yellow";
import Gradient3 from "../buttons/Gradientscircle/Gradient3blue";
class Component2 extends React.Component{

    render()
    {
        const viewBox1 =[0, 0, 500, 500]
        const viewBox2 =[0, 0, 1080, 1920]
        return(
            <>
            <svg id="fonforcomponent2"> </svg>
            <Gradient2 transform="translate(-180 950)"/>
            <Gradient3 transform="translate(-240 290)"/>
            <Face_var2 transform="translate(-150 800)"/>

            <svg viewBox={viewBox1}  fill="#2c3370" id="bluecircleloc1"     width="500" height="500"><ellipse  cx="250" cy="250" rx="212.95" ry="223.45"/></svg>
                <svg viewBox={viewBox1}  fill="#2c3370" id="bluecircleloc2" width="400" height="400"><ellipse  cx="220" cy="200" rx="170" ry="190"/></svg>
                <svg viewBox={viewBox1}  fill="#2c3370" id="bluecircleloc3" width="300" height="250"><ellipse  cx="125" cy="150" rx="120" ry="150"/></svg>
                <Logo transform="translate(-400 -50)" fill="white"/>
                <svg id="text1component2"><text x="100" y="100"  fontSize="80px"  fontWeight="bold" fill="white" font-family="PT Sans">Привет, я</text></svg>
                <svg id="text2component2"><text x="50" y="100"  fontSize="60px"  fontWeight="bold" fill="white" font-family="PT Sans">Приятно</text>
                    <text x="40" y="165"  fontSize="50px"   fill="white" font-family="PT Sans" fontWeight="bold">познакомится</text>
                </svg>
            </>
        )
    }
}
export default Component2