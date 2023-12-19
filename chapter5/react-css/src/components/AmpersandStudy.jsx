import React from "react";
import styled from 'styled-components';

/* styled-components >  &(ampersand) 연습 */
const Thing = styled.div.attrs(() => ({ tabIndex: 0 }))`
    color : blue;

    // Thing 컴포넌트 위에 마우스가 hover 시
    &:hover {
        color: red;
    }

    // Thing의 형제 요소들
    & ~ & {
        background: tomato;
    }

    // Thing 바로 다음 형제
    & + & {
        background: lime;
    }

    // Thing이 something이라는 클래스를 갖고 있을 때
    &.something {
        background: orange;
    }

    // sonething-else라는 클래스를 가진 태그 하위에 있을 때
    .something-else & {
        border: 1px solid;
    }
`;

export const AmpersandStudy = () => {
    return (
        <>  
            {/* 구분선 */}
            <div style={{border: '1px solid black', margin: '20px 0px'}}></div>
            <Thing>Hello world!</Thing>
            <Thing>How ya doing?</Thing>
            <div></div> 
            <Thing>How ya doing?</Thing>
            <Thing className="something">The sun is shining...</Thing>
            <div>Pretty nice day today.</div>
            <Thing>Don't you think?</Thing>
            <div className="something-else">
                <Thing>Splendid.</Thing>
            </div>
        </>
    );
};