/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {

    /* 1. 컴포넌트 파일 안에 CSS를 작성하는 방법 */
    const containerStyle = css`
        border: solid 1px #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    /* 2. 자바스크립트 객체로 스타일을 정의하는 방법 */
    const titleStyle = css({
        margin: 0,
        color: "#aaa"
    });

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>Emotion입니다.</p>
            <SButton>버튼</SButton>
        </div>
    );
};

/* 3. styled-components 작성 방법 */
const SButton = styled.button`
    background-color: #ddd;
    border: none;
    padding: 8px;
    border-radius: 8px;

    &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
    }
`;