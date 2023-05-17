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
                <Land2 fill="#f1f9fe" transform="translate(-100 -100)"/>
                <Land1 fill="#A592C5" transform="translate(-10 0)"/>
                <Land1 fill="#96BCD6" transform="translate(350 30)"/>
                <Land1 fill="#f1f9fe" transform="translate(700 0)"/>
                <Land1 fill="#A592C5" transform="translate(550 190)"/>
                <Land1 fill="#f1f9fe" transform="translate(150 190)"/>
                <Land1 fill="#96BCD6" transform="translate(0 350)"/>
                <Land1 fill="#96BCD6" transform="translate(700 350)"/>
                <Land1 fill="#f1f9fe" transform="translate(550 500)"/>
                <Land1 fill="#A592C5" transform="translate(170 500)"/>
                <Land3 fill="#A592C5" transform="translate(10 -20)"/>
                <Land4 fill="#EBC200" transform="translate(10 -60)"/>
                <svg id="text1Mainmenu"><text x="50" y="90" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">(＾▽＾)</text></svg>
                <svg id="text2Mainmenu"><text x="50" y="110" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">Привет, </text>
                    <text x="350" y="70" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">(*^‿^*)</text>
                    <text x="50" y="180" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">Отлично выглядишь</text>
                </svg>
                <svg id="text3Mainmenu"><text x="55" y="90" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">Подсказать</text>
                    <text x="70" y="170" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">что-нибудь?</text>
                </svg>

                <div onClick={this.clickforwake} id="forhello">
                    <Link id="link1mainmenu" to='/Whoareyou' >Кто я такой?</Link>

                    <Link id="link2mainmenu"  to='/HSE'>Хочешь в Вышкy?</Link>

                    <Link id="link3mainmenu" to='/timetable' >Показать расписание?</Link>

                    <Link id="link4mainmenu" to='/Pushkin' >Кто такой Пушкин?</Link>

                    <Link id="link5mainmenu" to='/moscow' >Сколько лет Москве?</Link>

                    <Link id="link6mainmenu" to='/registration' >Пройти регистрацию?</Link>

                    <Link id="link7mainmenu" to='/gameMemory' >Сыграем в "Найди пару"?</Link>

                    <Link id="link8mainmenu" to='/gameFB' >Сыграем в Flappybird?</Link>

                    <Link id="link9mainmenu" to='/gameXO' >Сыграем в X и O?</Link>
                {this.state.Onetouch==="Sleep" ? <Hello/>: null}</div>
                    <Routes>
                        <Route path='/Whoareyou' element={<Component2/>}/>
                        <Route path='/HSE' element={<Component3/>}>
                            <Route path='student' element={<Component1/>}></Route>
                            <Route path='visiter' element={<Mainmenu/>}></Route>
                        </Route>
                        <Route path='/timetable' element={<Timetable/>}/>
                        <Route path='/Pushkin' element={<Pushkin/>}/>
                        <Route path='/moscow' element={<Moscow/>}/>
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='/gameMemory' element={<React.StrictMode><GameMemory/> </React.StrictMode>}/>
                        <Route path='/gameFB' element={<React.StrictMode>
                            <FlappyBird/></React.StrictMode>}/>
                        <Route path='/gameXO' element={<React.StrictMode> <TicTacToe/>
                        </React.StrictMode>}/>
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