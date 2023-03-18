import React from "react";
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import Component1 from "./Component1/component1";
import XandO from "./Games/XandO";
import Board from "./Games/2048";
import Buttonmain1 from "./buttons/buttonmain1";
import Buttonmain2 from "./buttons/buttonmain2";
import Buttonmain3 from "./buttons/buttonmain3";
import Face from "./buttons/face";
import "./buttons/plyam2"
import "./formainmenu.css";
import Logo from "./buttons/logo";
import Feather from "./buttons/feather";
import PlyamWeather from "./buttons/plyamWeather";
class Menu extends React.Component {
    render() {
        return(
            <>
                <svg className="fon"></svg>
                <Face/>
                <Buttonmain1 />
                <Buttonmain2/>
                <Buttonmain3/>
                <Logo/>
                <Feather/>
                <PlyamWeather/>
                <header>

                             <Link id="link1" to='/Menu2'>Хочешь в Вышку?</Link>

                            <Link id="link2"  to='/HSE'>Играть в X и O?</Link>

                            <Link id="link3" to='/who'>Кто я такой?</Link>


                </header>
                <main>
                    <Routes>
                        <Route path='/Menu2' element={<Component1/>}/>
                        <Route path='/HSE' element={<XandO/>}/>
                        <Route path='/who' element={<Board />}/>
                    </Routes>
                </main>
            </>
        )
    }
}
export default Menu