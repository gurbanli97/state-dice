import React from 'react'
import Dice from './Dice';

class RollingDie extends React.Component {
    constructor() {
        super();

        this.state = {
            dice1: 'one',
            dice2: 'one',
            rolling: false
        };

        this.numbers = ['one','two','three','four','five','six'];

        this.rollDice = this.rollDice.bind(this);
    }

    rollDice(e){
        const dice1 = this.numbers[Math.floor(Math.random() * this.numbers.length)];
        const dice2 = this.numbers[Math.floor(Math.random() * this.numbers.length)];

        this.setState({
            dice1,
            dice2,
            rolling: true
        });

        setTimeout(() => {
            this.setState({
                rolling: false
            });
        },1000);
    }

    render() {
        return (
            <React.Fragment>
                <Dice num={this.state.dice1} rolling={this.state.rolling}/>
                <Dice num={this.state.dice2} rolling={this.state.rolling}/>
                 <button onClick={this.rollDice} disabled={this.state.rolling}>Roll</button>

            </React.Fragment>
        )
    }
}

export default RollingDie