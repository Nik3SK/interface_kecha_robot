import React from "react";
import "./designforcomp1.css";
import Facevar2 from "../buttons/Faces/face_var2";
import Logo from "../buttons/Logos/LogoVar_1";
import Land5 from "../buttons/Figures/Figure_7";
import Land2 from "../buttons/Figures/Figure_4";
import button3D1type from "../buttons/sliceboxes/SliceBoxVar3";
import Button3D1type from "../buttons/sliceboxes/SliceBoxVar3";
import Land3 from "../buttons/Figures/Figure_5";
class Component1 extends React.Component{

    render()
    {
        const viewBox1 =[0, 0, 200, 200]
        const viewBox2 =[0, 0, 1080, 1920]
        const viewBox3=[0,0,100,100]
        return(
            <>
                <svg id="fonforcomponent1"> </svg>
                <svg id="facecomponent1" viewBox={viewBox2} ><Facevar2/></svg>
                <svg id="logocomponent1" viewBox={viewBox1} ><Logo/></svg>
                <svg id="Land5component1" viewBox={viewBox2}><Land5/></svg>
                <svg id="text1component1" width="800" height="300"><text x="0" y="100"  fontSize="80px"  fontWeight="700px" fill="white">Пройдем регистрацию</text>
                  <text x="10" y="200"  fontSize="80px"  fontWeight="700px" fill="white">На мероприятие?</text>
                </svg>
                <Button3D1type/>
                <svg id="butcomponent1" viewBox={viewBox2} transform="scale(-1 1)" transform-origin="250 250" height="1900" width="1080"><Button3D1type/></svg>
                <svg id="text2component1" width="800" height="300"><text x="150" y="100"  fontSize="80px"  fontWeight="700px" fill="white">ДА</text>
                    <text x="600" y="100"  fontSize="80px"  fontWeight="700px" fill="white">НЕТ</text></svg>
                <svg id="land2component1" viewBox={viewBox2}  ><Land2 /></svg>
                <svg id="land3forcomponent1" viewBox={viewBox2}><Land3/></svg>
                <svg id="land3var2forcomponent1" viewBox={viewBox2}><Land3/></svg>

                <svg id="text3component1" width="800" height="300"><text x="75" y="120"  fontSize="60px"  fontWeight="700px" fill="white">(o˘◡˘o)</text>
                <text x="280" y="160"  fontSize="50px"  fontWeight="700px" fill="#8EA725">(っ˘ω˘ς)</text>
                <text x="580" y="160" fontSize="50px"  fontWeight="700px" fill="#8EA725">(￣︶￣)</text>
                    <text x="480" y="260" fontSize="50px"  fontWeight="700px" fill="white">((^-^))</text>
                </svg>
                {/*<svg viewBox={viewBox1}  fill="#2c3370" id="bluecircleloc1" width="500" height="500"><ellipse  cx="250" cy="250" rx="212.95" ry="223.45"/></svg>*/}
                {/*<svg viewBox={viewBox1}  fill="#2c3370" id="bluecircleloc2" width="400" height="400"><ellipse  cx="200" cy="200" rx="170" ry="190"/></svg>*/}
                {/*<svg viewBox={viewBox1}  fill="#2c3370" id="bluecircleloc3" width="300" height="250"><ellipse  cx="125" cy="150" rx="120" ry="150"/></svg>*/}
                {/*<svg viewBox={viewBox1} id="logoforcomponent2" width="500" height="500"><Logo/></svg>*/}
                {/*<svg id="text2component2"><text x="30" y="100"  fontSize="60px"  fontWeight="700px" fill="white">Приятно</text>*/}
                {/*    <text x="10" y="165"  fontSize="45px"   fill="white">познакомится</text>*/}
                {/*</svg>*/}
            </>
        )
    }
}
export default Component1