import React from "react";
class App extends React.Component{

    render(){

        var el1=document.getElementById("ellipse1")
        var ctx1 =el1.getContext('2d')
        ctx1.fillStyle = 'skyblue';
        ctx1.beginPath();
        ctx1.ellipse(150,80, 110, 66, 0, 0, 2 * Math.PI);
        ctx1.fill()

        var el2=document.getElementById("ellipse2")
        var ctx2 =el2.getContext('2d')
        ctx2.fillStyle = 'skyblue';
        ctx2.beginPath();
        ctx2.ellipse(150, 80, 110, 66, 0, 0, 2 * Math.PI);
        ctx2.fill()
        ctx2.translate(800,500);

        var el3=document.getElementById("ellipse3")
        var ctx3 =el3.getContext('2d')
        ctx3.fillStyle = 'burlywood';
        ctx3.beginPath();
        ctx3.ellipse(100,100, 70 , 50, 0, 0, 2 * Math.PI);
        ctx3.fill()

        var bu1=document.getElementById("but1")
        var b1 =bu1.getContext('2d')
        b1.fillStyle = "yellow";
        b1.font = "italic 25pt Arial";
        b1.fillText("Поступить в Вышку?",20,70,270);

        var bu2=document.getElementById("but2")
        var b2 =bu2.getContext('2d')
        b2.fillStyle = "yellow";
        b2.font = "italic 25pt Arial";
        b2.fillText(" Сыграть в игру? ",30,70,250);

        var bu3=document.getElementById("but3")
        var b3 =bu3.getContext('2d')
        b3.fillStyle = "yellow";
        b3.font = "italic 25pt Arial";
        b3.fillText(" Вышка в фактах? ",30,70,250);

        var bu4=document.getElementById("but4")
        var b4 =bu4.getContext('2d')
        b4.fillStyle = "yellow";
        b4.font = "italic 25pt Arial";
        b4.fillText("     Кто ты?    ",30,70,250);

       



        return(
            <div></div>
        )
    }
}
export default App
