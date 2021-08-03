import React, { Component } from 'react';

import style from './assets/css/Game.module.css';

const toSymbol = (n) => {
  switch (n) {
    case 0:
        return '';
    case 1:
        return 'O';
    case -1:
    default:
        return 'X';
  }  
};

// 0, 1, 2
// 3, 4, 5
// 6, 7, 8

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

class Game extends Component {
    state = {
        grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        player: 1,
        winner: 0,
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.grids!==this.state.grids) {
            this.setState({
                winner: this.getWinner(),
            });
        }
    };
    handleClick = (index) => {
        if (this.state.winner !== 0) return;

        const grids = [...this.state.grids];
        if (grids[index] !== 0) return;
        grids[index] = this.state.player;
        this.setState({
            grids: grids,
            player: this.state.player * -1,
        });
    };
    reset = () => {
        this.setState({
            grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            player: 1,
            winner: 0,
        });
    };
    getWinner = ()=>{
        const { grids } = this.state;
        for (const line of lines) {
            const [i, j, k] = line;
            if (grids[i]===grids[j]&&grids[j]===grids[k]) {
                return grids[i];
            }
        }
        //如果8條線都跑完沒有return東西的話，就return 0
        return 0;
    };
    render() {
        const { grids,player,winner } = this.state;
        return (
            <div className={style.board}>
                <div>
                    {
                        grids.map((elm,index) => (
                            <div
                                className={style.grid}
                                key={index}
                                onClick={()=>this.handleClick(index)}
                            >
                                <span>{toSymbol(elm)}</span>
                            </div>
                        ))
                    }
                </div>
                <div className={style.player}>Player: {toSymbol(player)}</div>
                <div className={style.winner}>Winner: {toSymbol(winner)}</div>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Game;