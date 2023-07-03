import React from "react";
import "./Mainmenu.css";
import Face_var2 from "../buttons/Faces/face_var2";
import Logovar2 from "../buttons/Logos/Logovar2";
import Land1 from "../buttons/Figures/Figure_3";
import Land2 from "../buttons/Figures/Figure_4";
import Land3 from "../buttons/Figures/Figure_5";
import Land4 from "../buttons/Figures/Figure_6";
import Gradient1violet from "../buttons/Gradientscircle/Gradient1violet";
import {Link, Route, Routes} from "react-router-dom";
import Component2 from "../Component2/component2";
import Component3 from "../Component3/component3";
import Component1 from "../Component1/component1";
import XandO from "../Games/XandO";
import Timetable from "../Timetable/Timetable";
import Pushkin from "../Pushkin/Pushkin";
import Moscow from "../Moscow/Moscow";
import Registration from "../Registration/Registration";
import FlappyBird from "../FlappyBird/FlappyBird";
import Game2048 from "../Game2048/Game2048";
import GameMemory from "../GameMemory/GameMemory";
import '../GameMemory/GameMemory.css';
import TicTacToe from "../TicTacToe/TicTacToe";
import Gradient2yellow from "../buttons/Gradientscircle/Gradient2yellow";
import Hello from "../Hello/Hello";

import phshcedule1 from "./ImagesForMainmenu/schedule-var1.png"
import CMshcedule2 from './ImagesForMainmenu/cardmemory-var1.png'
import Good from "./ImagesForMainmenu/goodmood.png"
import iconforFB from "./ImagesForMainmenu/iconforFB.png"
import iconforPyshkin from "./ImagesForMainmenu/iconforPyshkin.png"
import phtictacvar1 from "./ImagesForMainmenu/icontictacvar1.png"
import phtictacvar2 from "./ImagesForMainmenu/icontictacvar2.png"
import phtictacvar3 from "./ImagesForMainmenu/icontictacvar3.png"
import phtictacvar4 from "./ImagesForMainmenu/icontictacvar4.png"


import App from "../CandyCrush/App";

class Mainmenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Onetouch: "Sleep"
        }
        this.clickforwake = this.clickforwake.bind(this)
    }
    render() {

        return(
            <>

                <svg id="Mainmenufon" >
                </svg>

                <Gradient1violet transform="translate(200 700)"/>
                <Gradient2yellow transform="translate(0-150)"/>
                <Face_var2/>
                <Logovar2/>
                <Land2 fill="#f1f9fe" transform="translate(-100 -170)"/>


                <ul id="plastinsmenu">
                    <li id="plastin1"></li>
                    <li id="plastin2"></li>
                    <li id="plastin3">(o˘◡˘o)</li>
                    <li id="plastin4"></li>
                    <li id="plastin5"></li>
                    <li id="plastin6"></li>
                    <li id="plastin7"></li>
                    <li id="plastin8">
                        ~(˘▾˘~)
                    </li>
                </ul>
                <img src={phshcedule1} id="phfromainmenu" />
                <img src={CMshcedule2} id="cmfrommainmenu"/>
                <img src={Good} id="goodformainmenu"/>
                <img src={iconforFB} id="foriconforFB"/>
                <img src={iconforPyshkin} id="foriconforPyshkin"/>
                <img src={phtictacvar1} id="foricontictac"/>

                <Land3 fill="#A592C5" transform="translate(10 -20)"/>
                <Land4 fill="#EBC200" transform="translate(70 -180)"/>
                <svg id="text1Mainmenu"><text x="50" y="90" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">(＾▽＾)</text></svg>
                <svg id="text2Mainmenu"><text x="50" y="110" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">Привет, </text>
                    <text x="350" y="70" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">(*^‿^*)</text>
                    <text x="50" y="180" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">Отлично выглядишь</text>
                </svg>
                <svg id="text3Mainmenu"><text x="55" y="90" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">Подсказать</text>
                    <text x="70" y="170" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">что-нибудь?</text>
                    <text x="410" y="160" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">ツ</text>
                </svg>

                <div onClick={this.clickforwake} id="forhello">
                    <Link id="link1mainmenu" to='/Whoareyou' >Кто я такой?</Link>

                    {/*<Link id="link2mainmenu"  to='/HSE'>Хочешь в Вышкy?</Link>*/}

                    <Link id="link3mainmenu" to='/timetable' >Показать расписание</Link>

                    <Link id="link4mainmenu" to='/Pushkin' >Кто такой Пушкин?</Link>

                    {/*<Link id="link5mainmenu" to='/moscow' >Сколько лет Москве?</Link>*/}

                    <Link id="link7mainmenu" to='/gameMemory' >Сыграем в <br/>"Найди пару"</Link>

                    <Link id="link8mainmenu" to='/gameFB' >Сыграем <br/> в Flappybird?</Link>

                    <Link id="link9mainmenu" to='/gameXO' >Давай <br/> в</Link>

                    {/*<Link id ="link10mainmenu" to='/gameCC'> Сыграем в <br/> Candy Crash</Link>*/}
                {this.state.Onetouch==="Sleep" ? <Hello/>: null}</div>


                    <Routes>
                        <Route path='/Whoareyou' element={<Component2/>}/>
                        <Route path='/HSE' element={<Component3/>}>
                            <Route path='student' element={<Component1/>}></Route>
                            <Route path='visiter' element={<Mainmenu/>}></Route>
                        </Route>
                        <Route path='/gameCC' element={
                            <React.StrictMode>
                            <App />
                            </React.StrictMode>
                            }/>

                        <Route path='/timetable' element={<Timetable/>}>
                            <Route path='Mainmenu' element={<Mainmenu/>} ></Route>
                        </Route>
                        <Route path='/Pushkin' element={<Pushkin/>}>
                            <Route path='Mainmenu' element={<Mainmenu/>} ></Route>
                        </Route>
                        <Route path='/moscow' element={<Moscow/>}/>
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='/gameMemory' element={<React.StrictMode><GameMemory/> </React.StrictMode>}>
                            <Route path='Mainmenu' element={<Mainmenu/>} ></Route>
                        </Route>
                        <Route path='/gameFB' element={<React.StrictMode><FlappyBird/></React.StrictMode>}>
                            <Route path='Mainmenu' element={<Mainmenu/>} ></Route>
                        </Route>
                        <Route path='/gameXO' element={<React.StrictMode> <TicTacToe/></React.StrictMode>}>
                            <Route path='Mainmenu' element={<Mainmenu/>} ></Route>
                        </Route>
                    </Routes>

            </>
        )
    }
    clickforwake(){
         this.setState({Onetouch: "Wakeup"})
        console.log("I am wake")
    }
}
export default Mainmenu