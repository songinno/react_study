import React, {useReducer, useState} from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

export const Counter = () => {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrese = () => {
        dispatch({type: 'INCREMENT'});
    };

    const onDecrease = () => {
        dispatch({type: 'DECREMENT'});
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};