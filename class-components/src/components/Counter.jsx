import React, {Component} from "react";

class Counter extends Component {
    /* 커스텀 메서드 만들기 */
    // // State 선언
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0
    //     };
    // }

    state = {
        counter: 0,
        fixed: 100
    };

    // 2. 커스텀 메서드 선언 시, 화살표 함수 문법 사용
    handleIncrease = () => {
        // setState 연속 사용 - 동작 X
        /* this.setState(
            {counter: this.state.counter + 1}
        );
        this.setState(
            {counter: this.state.counter + 1}
        ); */

        // setState의 2번째 파라미터 이용
        /* this.setState(
            {counter: this.state.counter + 1},
            // 2번째 파라미터 (콜백함수)
            () => {
                this.setState(
                    {counter: this.state.counter + 1}
                )
            }
        ); */

        // 함수형 업데이트
        this.setState(currentState => (
            {
                counter: currentState.counter + 1
            }
        ));

        this.setState(currentState => (
            {
                counter: currentState.counter + 1
            }
        ));
    };

    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        )
    };
        
}

export default Counter;