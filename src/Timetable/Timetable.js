import React from "react";
import "./Timetable.css";
// import axios from "axios";
import {useState,useRef } from "react";
import Face_var2 from "../buttons/Faces/face_var2";
import Gradient2 from "../buttons/Gradientscircle/Gradient2yellow";
import Logovar2 from "../buttons/Logos/Logovar2";
import Land4 from "../buttons/Figures/Figure_6";
import Land2 from "../buttons/Figures/Figure_4";
import Land6 from "../buttons/Land6/Land6";
import Land3Dtype3 from "../buttons/sliceboxes/Sliceboxlong";
import Gradient3 from "../buttons/Gradientscircle/Gradient3blue";
import Gradient1 from "../buttons/Gradientscircle/Gradient1violet";

import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import {keyboard} from "@testing-library/user-event/dist/keyboard";
import {Link, Outlet} from "react-router-dom";
import phtictacvar1 from "../Mainmenu/ImagesForMainmenu/icontictacvar1.png";

import nowifi from "./imagesforTimetable/free-icon-no-internet-4652357.png"
import XandO from "../Games/XandO";
// import {json} from "react-router";

function Timetable() {
    const [Fio,setFio] = useState('');
    const [FioforTime, setFioforTime] = useState('')
    const [TimeTable,setTimeTable] = useState(['Время','Время','Пара','Время','Время','Пара','Время','Время','Пара']);
    const [Names, setNames] = useState([])
    const [KeyboardOpen, setKeyboardOpne] =useState(false)
    const [Inputs, setInputs] = useState("")
    const [Layout, setLayout] = useState("default");
    const keyboard = useRef();
    function Getfio(e) {

        setFio(e.target.value)
        const ws = new WebSocket('ws://localhost:8000');
        ws.onopen = () => {
            if (FioforTime==""){
                ws.send(Fio)
                console.log(Fio)
            } else{
                ws.send(FioforTime)
                console.log(FioforTime)
            }
        };
        ws.onmessage = (event) => {
            const response = event.data
            if (FioforTime==""){
                setNames(response.split(','))
            } else{
                setTimeTable(response.split(','))
            }
        };

        ws.onclose = () => {

        };
    }
    function Gettt(e) {
        setFioforTime(e.target.innerText)
        const ws = new WebSocket('ws://localhost:8000');
        if (FioforTime!='') {
            ws.onopen = () => {
                ws.send(FioforTime)
                console.log(FioforTime)

            };
            ws.onmessage = (event) => {
                const response = event.data
                setTimeTable(response.split(','))

            };

            ws.onclose = () => {

            };
        }
    }
    function  calltokeyboard() {
        setKeyboardOpne(true)
    }
    const onChange = input => {
        setInputs(input);

    };
    const handleShift = () => {
        const newLayoutName = Layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };
    const onKeyPress = button => {
        if (button === "{lock}") handleShift();
        if (button === "{esc}") setKeyboardOpne(false);
    };
    return (
        <>
            <svg id="fonfortimetable"></svg>
            <Gradient2 transform="translate(-190 -20)"/>
            <Gradient3 transform="translate(230 700)"/>
            <Gradient1 transform="translate(-230 1200)"/>
            <Face_var2 transform="translate(-150 50)"/>
            <Logovar2/>
            <Land2 fill="#EBC200" transform="translate(-20 -70)"/>
            <Land4  fill="#A592C5" transform="translate(-250 -500)"/>
            <form id="formforinput" >

                <input id="inputtimetable" placeholder="напиши тут свое имя! "  onChange={Getfio}

                />
                <ul id="autocomplete">
                    {
                        Fio
                          ? Names.map((item)=>{
                              return(
                                  <li className="forpathofautocompl" onClick={Gettt}>{item}</li>
                              )
                            })
                            :null
                    }
                </ul>
            </form>
            <svg id="text1Timetable">
                <text x="30" y="75" fontSize="43" fontFamily="PT Sans" fontWeight="bold" fill="white">ヽ(・∀・)ﾉ</text>
                <text x="20" y="130" fontSize="43" fontFamily="PT Sans" fontWeight="bold" fill="white">Открою твое расписание,</text>
                <text x="60" y="180" fontSize="43" fontFamily="PT Sans" fontWeight="bold" fill="white">только сначала... (>^.^)></text>
            </svg>
            <svg id="text2Timetable">
                <text x="230" y="235" fontSize="63" fontFamily="PT Sans" fontWeight="bold" fill="white">{TimeTable[10]}</text>
                <text x="80" y="285" fontSize="43" fontFamily="PT Sans" fontWeight="bold" fill="white">{TimeTable[9]}</text>
                <text x="-20" y="135" fontSize="103" fontFamily="PT Sans" fontWeight="bold" fill="white">ッ</text>
                <text x="40" y="225" fontSize="53" fontFamily="PT Sans" fontWeight="bold" fill="white">Погода:</text>
            </svg>

            {/*<img id="depictweather" onerror='this.style.display = "none"' src = {(`https://openweathermap.org/img/w/`+TimeTable[11]+`.png`).replace(/\s+/g, '')} title="weather" alt="" />*/}
            <svg id="text3Timetable">
                <text x="50" y="100" fontSize="43" fontFamily="PT Sans" fontWeight="bold" fill="white">(＠＾－＾)</text>
            </svg>
            <div id="inf1">
                <Land6 fill="#f1f9fe" transform="translate(0 -1300)"/>
                <Land6 fill="#96bcd6" transform="translate(0 -1100)"/>
                <Land6 fill="#AA90C4" transform="translate(0 -900)"/>
                <Land3Dtype3 fill1="#f8f8f6" transform1="translate(-90 -950)" fill2="#e1e8ee" transform2="translate(-90 -950)" fill3="#cad9e6" transform3="translate(-100 -950)" fill4="#b1cade" transform4="translate(-120 -950)" fill5="#96bcd6" transform5="translate(-100 -950)" fill6="#78adce" transform6="translate(-90 -950)"/>
                <svg id="lessons">
                    <text x="100" y="130" fontSize="33" fontFamily="PT Sans" fontWeight="bold" fill="#96bcd6">{TimeTable[0]}</text>
                    <text x="200" y="130" fontSize="33" fontFamily="PT Sans" fontWeight="bold" fill="#96bcd6">{TimeTable[1]}</text>
                    <text x="350" y="130" fontSize="33" fontFamily="PT Sans" fontWeight="bold" fill="#96bcd6">{TimeTable[2]}</text>

                    <text x="100" y="330" fontSize="33" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">{TimeTable[3]}</text>
                    <text x="200" y="330" fontSize="33" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">{TimeTable[4]}</text>
                    <text x="350" y="330" fontSize="33" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">{TimeTable[5]}</text>

                    <text x="100" y="530" fontSize="33" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">{TimeTable[6]}</text>
                    <text x="200" y="530" fontSize="33" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">{TimeTable[7]}</text>
                    <text x="350" y="530" fontSize="33" fontFamily="PT Sans" fontWeight="bold" fill="#f1f9fe">{TimeTable[8]}</text>

                    <text x="350" y="800" fontSize="73" fontFamily="PT Sans" fontWeight="bold" fill="white">ヽ(*⌒▽⌒*)ﾉ</text>
                </svg>

            </div>
         <div id="forKeyboard">
             {KeyboardOpen===true ? <Keyboard
                 keyboardRef={r => (keyboard.current = r)}
                 onChange={onChange}
                 onKeyPress={onKeyPress}
                 layoutName ={Layout}
                 theme={"hg-theme-default hg-layout-default myTheme"}
                 layout={{
                     default: [
                         "1 2 3 4 5 6 ",
                         "й ц у к е н",
                         "г ш щ з х ъ",
                         "ф ы в а п р",
                         "о л д ж э я",
                         "я ч с м н и",
                         "т ь б ю {enter}",
                         "{lock} {space} {bksp} {esc}",

                     ],
                     shift: [
                         "` 1 2 3 4 5 6 7 8 9 0 - =",
                         "Й Ц У К Е Н Г Ш Щ З Х Ъ \\",
                         "Ф Ы В А А П О Л Д Ж Э ; ' {enter}",
                         "{shift} Я Ч С М И Т Ь Б Ю {shift}",
                         "{space} {bksp} {lock} {esc}"
                     ]
                 }}
                 buttonTheme={[
                     {
                        class:"hg-red",
                         buttons:"A a"
                     }
                 ]}
                 display={{
                     "{space}": "Пробел",
                     "{bksp}": "Удалить символ",
                     "{enter}": "Enter",
                     "{shift}":"Shift",
                     "{lock}": "Смена Регистра",
                     "{esc}": "Убрать клавиатуру"
                 }}
             />: null}
         </div>
            <img src={nowifi} id="fornowifi"/>
            <svg id="text4Timetable">
                <text x="50" y="90" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#2c3370">Извини, это работает </text>
                <text x="50" y="158" fontSize="60" fontFamily="PT Sans" fontWeight="bold" fill="#2c3370">только в сети НИУ ВШЭ</text>
            </svg>
            <div id="BackforTimeTable">
                <Link id="linkbackTimeTable" to='/Mainmenu'>В главное<br/> меню</Link>
                <Outlet/>
            </div>
        </>
    );

}

export default Timetable