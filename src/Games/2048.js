import React from "react";
import "./design2048.css"
class Square extends React.Component {
    render() {
        return (
            <button id="nucler"  >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    handleClick(i){
        const squares = this.state.valiesofsqur.slice();
        squares[i]= squares[i] ? '4': '0';
        this.setState({valiesofsqur:squares});
    }
    renderSquare(i) {
        return <Square value={this.state.valueofsquar[i]} onClick/>;

    }
    constructor(props) {
        super(props);
        this.state={
            valueofsquar: Array(16).fill(2),
        }
    }

    render() {
        const status = 'Next player: X';

        return (
            <div id="fonfor2048">
                <div className="status">{status}</div>
                <div id="mainboard">
                <div >
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div >
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
                <div >
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                </div>
                <div >
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                </div>
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
export default Board