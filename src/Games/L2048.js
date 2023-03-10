import React from "react";
import "./design2048.css"

function Square(props) {
        return (
            <button className="tile" onClick={() => props.onClick()}>
                {props.value}
            </button>
        );
}
class Component2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          valiesofsqur: Array(9).fill(null),
          Nextjoin: true,
        };
    }
    handleClick(i){
        const squares = this.state.valiesofsqur.slice();
        squares[i]= this.state.Nextjoin ? 'O': 'X';
        this.setState({valiesofsqur:squares, Nextjoin: !this.state.Nextjoin,});
    }
    renderSquare(i) {
        return <Square  value={this.state.valiesofsqur[i]} onClick={()=> this.handleClick(i)}/>;
    }
    render() {
        const winner = calculateWinner(this.state.valiesofsqur);
        let status;
          if (winner)
              status = "Победитель " + winner
          else
              status ="You are playing"



            return(
                    <div className="board">
                        <div id="firstword">{status}</div>
                        <div className="board-row">
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                        </div>
                    </div>
                );
            }
    }

function calculateWinner(valiesofsqur) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (valiesofsqur[a] && valiesofsqur[a] === valiesofsqur[b] && valiesofsqur[a] === valiesofsqur[c]) {
            return valiesofsqur[a];
        }
    }
    return null;
}
export default Component2