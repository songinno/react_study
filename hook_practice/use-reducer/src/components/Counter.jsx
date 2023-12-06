import React, {useState} from "react";

export const Counter = () => {
    const [number, setNumber] = useState(0);

    const onIncrese = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};