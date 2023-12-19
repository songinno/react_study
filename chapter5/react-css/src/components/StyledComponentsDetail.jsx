import React from "react";
import styled from 'styled-components';

/* styled-components 심화 학습 */

/* props 사용 */
const Button = styled.button`
    
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

/* 스타일 extends */
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

/* as */
const ReversedButton = props => {
    const {children} = props; // string

    return (
        <Button>{children.split('').reverse()}</Button>
    );
};

/* attrs */
const Input = styled.input.attrs({placeholder: 'Hello'})`
    background-color: black;
`;


export const StyledComponentsDetail = () => {
    return (
        <>
            <div style={{margin: '15px 0px', border: '1px solid gray'}}>
            <Button>Normal Button</Button>
            <Button primary="true">Primary</Button>
            <TomatoButton>Tomato Button</TomatoButton>
            <TomatoButton primary="true">Tomato Button</TomatoButton>
            </div>
            <div style={{margin: '15px 0px', border: '1px solid gray'}}>
                <Button>Normal Button</Button>
                {/* as */}
                <Button as="a" href="#">Link with Button styles</Button>
                <Button as={ReversedButton}>Custom Button with Noral Button styles</Button>
                {/* attrs */}
                <Input />
                <Input />
                <Input />
            </div>
        </>

    );
};