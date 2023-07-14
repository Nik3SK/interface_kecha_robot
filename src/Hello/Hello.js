import React from "react";
import "./Hello.css"
import Face_var2 from "../buttons/Faces/face_var2";
import Gradient2yellow from "../buttons/Gradientscircle/Gradient2yellow";
import Logo from "../buttons/Logos/LogoVar_1";
import Pushkin from "../Pushkin/Pushkin";
import Mainmenu from "../Mainmenu/Mainmenu";
import Logovar2 from "../buttons/Logos/Logovar2";
import Land6 from "../buttons/Land6/Land6";
class Hello extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            YouMessage:"No",
            YouAnswer:"No"
        }

        this.Getdream=this.Getdream.bind(this)
    }
    Getdream(event){
        if (event.key=='Enter') {
            console.log("Hay")
            if(event.target.value!=null){
                this.setState({YouMessage: event.target.value})
                const ws = new WebSocket('ws://localhost:8000');
                ws.onopen = () => {
                    ws.send(this.state.YouMessage)
                };
                ws.onmessage = (event) => {
                    const response = event.data
                    this.setState({YouAnswer: response})
                };

                ws.onclose = () => {

                };
            }

        }

    }

    render()
    {


        return(
            <>

                <svg id="fonforHello">
                    <Gradient2yellow transform="translate(-200 410)"/>
                    <Face_var2 transform="translate(-200 580)"/>
                    <ellipse fill = "#2c3370" cx="877.88" cy="719.43" rx="55.37" ry="53.26"/>
                    <ellipse fill = "#2c3370" cx="764.71" cy="806.64" rx="32.6" ry="31.36"/>
                    <ellipse fill = "#2c3370" cx="756.2" cy="440.13" rx="198.95" ry="173.45"/>
                    <Logo fill="white" transform='translate(70 90)'/>

                </svg>
                <input id="inputHello" placeholder=" " onKeyPress={this.Getdream} autoFocus />
                <svg id="text1forHello">
                    <text x="110" y="70" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">
                        Привет,
                    </text>
                    <text x="70" y="140" fontSize="59" fontFamily="PT Sans" fontWeight="bold" fill="white">
                         я голосовой
                    </text>
                    <text x="30" y="210" fontSize="59" fontFamily="PT Sans" fontWeight="bold" fill="white">
                        помощник Кеша
                    </text>
                    <text x="90" y="220" fontSize="59" fontFamily="PT Sans" fontWeight="bold" fill="white">

                    </text>
                    <text x="180" y="270" fontSize="39" fontFamily="PT Sans" fontWeight="bold" fill="skyblue">

                    </text>
                </svg>

                {this.state.YouMessage!="No"?
                    <><Land6 fill="skyblue" transform="translate(-30 -70)"/>
                      <svg className="formessages" >
                          <text x="0" y="70" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">{this.state.YouMessage}</text>
                      </svg>
                    </>
                    : null}
                {this.state.YouAnswer!="No"?
                    <><Land6 fill="#B1CADE" transform="translate(30 130)"/>
                        <svg className="foranswers" >
                            <text x="0" y="70" fontSize="70" fontFamily="PT Sans" fontWeight="bold" fill="white">{this.state.YouAnswer}</text>
                        </svg>
                    </>
                    : null}
            </>
        )
    }

}
export default Hello