import React, {Component} from "react";

class Counter extends Component {
    // 1. constructor에서 bind 작업
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }


    /* 커스텀 메서드 만들기 */
    handleIncrease() {
        console.log('increase');
        console.log(this); 
    }

    handleDecrease() {
        console.log('decrease');
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>0</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        )
    };
        
}

export default Counter;