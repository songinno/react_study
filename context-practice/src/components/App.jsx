import React from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

/* Context 생성 */
// const CounterContext = createContext();

/* Context 분리 */
const CounterValueContext = createContext();
const CounterActionsContext = createContext();

// Provider 따로 만들기
/* State 조회 및 변경 기능을 컴포넌트 단에서 구현할 시 */
// const CounterProvider = props => {
//     const {children} = props;
//     const counterState = useState(1);
//     return (
//         <CounterContext.Provider value={counterState}>
//             {children}
//         </CounterContext.Provider>
//     );
// };

/* State 조회 및 변경 기능을 Provider 단에서 구현할 시 */
const CounterProvider = props => {
    console.log('CounterProvider 렌더링');
    const {children} = props;
    const [counter, setCounter] = useState(1);
    const actions = useMemo(() => ({
        increase() {
            setCounter(prev => prev + 1);
        },
        decrease() {
            setCounter(prev => prev - 1);
        }
    }), []);
    
    // const value = useMemo(() => [counter, actions], [counter, actions]);
    return (
        <CounterActionsContext.Provider value={actions}>
            <CounterValueContext.Provider value={counter}>
                {children}
            </CounterValueContext.Provider>
        </CounterActionsContext.Provider>
    );
};

// Custom Hook
// const useCounterState = () => {
//     const value = useContext(CounterContext); // value : useState로 만든 State와 업데이트 함수가 있는 배열
//     if (value === undefined) {
//         throw new Error('useCounterState should be used within CounterProvider')
//     }
//     return value;
// };

/* Context 분리에 따른 Custom Hook 분리 */
const useCounterValue = () => {
    const value = useContext(CounterValueContext);
    return value;
};

const useCounterActions = () => {
    const actions = useContext(CounterActionsContext);
    return actions;
};


export const App = () => {
    console.log('App 렌더링');
    return (
        <CounterProvider>
            <div>
                <Value />
                <Buttons />
            </div>
        </CounterProvider>
    );
};

// 숫자를 보여주는 컴포넌트
const Value = () => {
    console.log('Value 렌더링');
    // const [counter] = useCounterState(); // CounterProvider에서 정의한 State를 가져온 것
    const counter = useCounterValue(); // CounterProvider에서 정의한 State를 가져온 것
    return <h1>{counter}</h1>;
};

// 숫자에 변화를 주는 컴포넌트

/* State 업데이트 - 컴포넌트 단에서 구현 */
// const Buttons = () => {
//     const [, setCounter] = useCounterState(); // CounterProvider에서 정의한 State 업데이트 함수 가져온 것
//     const increaseCounter = () => setCounter(prev => prev + 1);
//     const decreaseCounter = () => setCounter(prev => prev - 1);
//     return (
//         <div>
//             <button onClick={increaseCounter}>+</button>
//             <button onClick={decreaseCounter}>-</button>
//         </div>
//     );
// };

/* State 업데이트 - Provider에서 구현 */
const Buttons = () => {
    console.log('Buttons 렌더링');
    // const [,actions] = useCounterActions();
    const actions = useCounterActions();

    return (
        <div>
            <button onClick={actions.increase}>+</button>
            <button onClick={actions.decrease}>-</button>
        </div>
    );
};