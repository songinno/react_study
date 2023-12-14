import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";

export const App = () => {
    return (
        <Wrapper>
            {/* <Hello name="react" color="red" isSpecial={true} /> */}
            <Hello name="react" color="red" isSpecial />
            <Hello color="pink" />

            <Counter />
        </Wrapper>

        
    );
};