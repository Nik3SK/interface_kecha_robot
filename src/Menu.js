import React from "react";
import {
    Routes,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import Component1 from "./Component1/component1";
import XandO from "./Games/XandO";
import "./formainmenu.css";
import Facevar2 from "./buttons/Faces/face_var2";
import Land2 from "./buttons/Figures/Figure_4";
import Land3 from "./buttons/Figures/Figure_5";
import Land4 from "./buttons/Figures/Figure_6";
import Land6 from "./buttons/Land6/Land6";
import Button3D2type from "./buttons/sliceboxes/SliceBoxVar4";
import Component2 from "./Component2/component2";
import Component3 from "./Component3/component3";
import Events from "./Events/Events";
import Logovar2 from "./buttons/Logos/Logovar2";
import Land3Dtype3 from "./buttons/sliceboxes/Sliceboxlong";
import Gradient1 from "./buttons/Gradientscircle/Gradient1violet";
import Mainmenu from "./Mainmenu/Mainmenu";
class Menu extends React.Component {
    render() {
        const viewBox2 =[0, 0, 1080, 1900]
        const link1Style={
            colour:"white"
        }
        return(
            <>
                <svg className="fon"></svg>
                <Gradient1 fill1="#AA90C4" fill2="white" transform="translate(-300 300)"/>
                <Gradient1 fill1="#EBC200" fill2="white" transform="translate(200 800)"/>
                <Gradient1 fill1="#EBC200" fill2="white" transform="translate(-150 1300)"/>
                <Facevar2/>
                <Land2 fill="#f1f9fe" transform="translate(0 -60)" />
                <Land3 fill="#AA90C4" transform="translate (60 -10)"/>
                <Land4 fill="#EBC200" transform="translate(0 -170)" />
                <Land6 fill="#f1f9fe" transform="translate(0 -270)"/>
                <Land6 fill="#96bcd6" transform="translate(0 -100)" />
                <Land6 fill="#AA90C4" transform="translate(0 60)" />
                <Land3Dtype3 fill1="#f8f8f6" transform1="translate(-90 0)" fill2="#e1e8ee" transform2="translate(-90 0)" fill3="#cad9e6" transform3="translate(-100 0)" fill4="#b1cade" transform4="translate(-120 0)" fill5="#96bcd6" transform5="translate(-100 0)" fill6="#78adce" transform6="translate(-90 0)"/>
                <Logovar2/>
                <svg id="smile" viewBox={viewBox2} width="900" height="1600">
                <path className="cls-48"
                      d="M630.24,1736a36.15,36.15,0,0,1,14-29.19l2.88,2.7c-8.38,7.26-12.25,15.69-12.25,26.49s3.88,19.22,12.25,26.49l-2.88,2.7A36.15,36.15,0,0,1,630.24,1736Z"/>
                <path className="cls-48"
                      d="M675.92,1715.3c0,12-9.5,21.79-21.2,21.79h-2.44v-5h2.44A16.56,16.56,0,0,0,671,1715.3v-25.71h4.89Z"/>
                <path className="cls-48"
                      d="M692.22,1729.76v-8h15.62v8Zm15.64-8v-8h7.81v8Zm0,16.07v-8h7.81v8Zm7.81-24.11v-16.07h7.8v16.07Zm0,40.18V1737.8h7.8v16.07Zm7.8-32.14v-8h7.81v8Zm0,16.07v-8h7.81v8Zm7.81-8v-8H746.9v8Z"/>
                <path className="cls-48"
                      d="M758.59,1716.78v-.19h29.75v.19l-14.81,31.63h-.11Zm25,2.64H763.34l10.12,22.24Z"/>
                <path className="cls-48"
                      d="M792.21,1729.76v-8h15.62v8Zm15.63-8v-8h7.81v8Zm0,16.07v-8h7.81v8Zm7.81-24.11v-16.07h7.81v16.07Zm0,40.18V1737.8h7.81v16.07Zm7.81-32.14v-8h7.81v8Zm0,16.07v-8h7.81v8Zm7.81-8v-8h15.62v8Z"/>
                <path className="cls-48"
                      d="M862.33,1762.49c8.38-7.26,12.25-15.69,12.25-26.49s-3.88-19.22-12.25-26.49l2.88-2.7a37.43,37.43,0,0,1,0,58.38Z"/>
                <path className="cls-48"
                      d="M913.39,1715.3c0,12-9.5,21.79-21.19,21.79h-2.44v-5h2.44a16.56,16.56,0,0,0,16.31-16.78v-25.71h4.88Z"/>
                    </svg>
                <svg id="text1">
                    <text x="65" y="70" fontSize="75" fill="skyblue" fontWeight="bold">Привет </text>
                    <text x="300" y="70" fontSize="60" fill="skyblue" fontWeight="bold"> (⌒‿⌒) </text>
                    <text x="20" y="150" fontSize="75" fill="skyblue" fontWeight="bold">Отлично выглядишь!</text></svg>
                <svg id="text2">
                <text fill="white" x="25" y="75" fontSize="75" >(</text>
                <text fontSize="70" y="75" x="35" fill="white">・∀・</text>
                <text fontSize="75" y="75" x="230" fill="white" >)</text></svg>
                <svg id="text3" width="450px" height="300px">
                    <text x="10" y="100" fontSize="80" fill="white" fontWeight="bold">Погода</text>
                    <text x="30" y="170" fontSize="70" fill="white">(Москва)</text>
                    <text x="300" y="135" fontSize="90" fill="white" fontWeight="bold">+10</text>
                </svg>

                {/*<svg id="text4"><text x="70" y="140" fontSize="80" fill="indigo">А еще</text></svg>*/}
            </>
        )
    }
}
export default Menu