import styled from "styled-components";
import React, { useEffect, useState } from "react";
import "./FlappyBird.css"
import Photo1forFB from './images/flappy_bird_bg.png';
import Photo2forFB from './images/flappy_bird_pipe.png';
import Photo3forFB from './images/flappy_bird_bird.png'
import {Link, Outlet} from "react-router-dom";
const BIRD_HEIGHT = 89;
const BIRD_WIDTH = 105;
const WALL_HEIGHT = 1920;
const WALL_WIDTH = 1080;
const GRAVITY = 18;
const OBJ_WIDTH = 150;
const OBJ_SPEED = 15;
const OBJ_GAP = 600;

function FlappyBird() {
    const [isStart, setIsStart] = useState(false);
    const [birdpos, setBirspos] = useState(300);
    const [objHeight, setObjHeight] = useState(0);
    const [objPos, setObjPos] = useState(WALL_WIDTH);
    const [score, setScore] = useState(0);
    useEffect(() => {
        let intVal;
        if (isStart && birdpos < WALL_HEIGHT - BIRD_HEIGHT) {
            intVal = setInterval(() => {
                setBirspos((birdpos) => birdpos + GRAVITY);
            }, 24);
        }
        return () => clearInterval(intVal);
    });

    useEffect(() => {
        let objval;
        if (isStart && objPos >= -OBJ_WIDTH) {
            objval = setInterval(() => {
                setObjPos((objPos) => objPos - OBJ_SPEED);
            }, 24);

            return () => {
                clearInterval(objval);
            };
        } else {
            setObjPos(WALL_WIDTH);
            setObjHeight(Math.floor(Math.random() * (WALL_HEIGHT - OBJ_GAP)));
            if (isStart) setScore((score) => score + 1);
        }
    }, [isStart, objPos]);

    useEffect(() => {
        let topObj = birdpos >= 0 && birdpos < objHeight;
        let bottomObj =
            birdpos <= WALL_HEIGHT &&
            birdpos >=
            WALL_HEIGHT - (WALL_HEIGHT - OBJ_GAP - objHeight) - BIRD_HEIGHT;

        if (
            objPos >= OBJ_WIDTH &&
            objPos <= OBJ_WIDTH + 80 &&
            (topObj || bottomObj)
        ) {
            setIsStart(false);
            setBirspos(300);
            setScore(0);
        }
    }, [isStart, birdpos, objHeight, objPos]);
    const handler = () => {
        if (!isStart) setIsStart(true);
        else if (birdpos < BIRD_HEIGHT) setBirspos(0);
        else setBirspos((birdpos) => birdpos - 50);
    };
    return (
        <>

        <Home onClick={handler}>
            <span id="scores">Score: {score}</span>
            <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
                {!isStart ? <Startboard>Click To Start</Startboard> : null}
                <Obj
                    height={objHeight}
                    width={OBJ_WIDTH}
                    left={objPos}
                    top={0}
                    deg={180}
                />
                <Bird
                    height={BIRD_HEIGHT}
                    width={BIRD_WIDTH}
                    top={birdpos}
                    left={100}
                />
                <Obj
                    height={WALL_HEIGHT - OBJ_GAP - objHeight}
                    width={OBJ_WIDTH}
                    left={objPos}
                    top={WALL_HEIGHT - (objHeight + (WALL_HEIGHT - OBJ_GAP - objHeight))}
                    deg={0}
                />
            </Background>
            <span id="scores">Score: {score}</span>
        </Home>
            <div id="BackforFlappy">
                <Link id="linkbackFlappy" to='/Mainmenu'>В главное<br/> меню</Link>
                <Outlet/>
            </div>
        </>
    );
}

export default FlappyBird;

const Home = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  background-image: url(${Photo1forFB});
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  border: 2px solid black;
`;

const Bird = styled.div`
  position: absolute;
  background-image: url(${Photo3forFB});
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

const Obj = styled.div`
  position: relative;
  background-image: url(${Photo2forFB});
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: rotate(${(props) => props.deg}deg);
`;

const Startboard = styled.div`
  position: relative;
  top: 49%;
  background-color: black;
  padding: 10px;
  width: 100px;
  left: 50%;
  margin-left: -50px;
  text-align: center;
  font-size: 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
`;

const ScoreShow = styled.div`
  text-align: center;
  background: transparent;
`;






// import React from "react";
// import "./FlappyBird.css"
// class FlappyBird extends React.Component{
//
//     render()
//     {
//         return(
//             <>
//                 <svg id="fonforFlappyBird"></svg>
//             </>
//         )
//     }
// }
// export default FlappyBird