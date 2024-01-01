import React from "react";
import { useSearchParams } from "react-router-dom";

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams); // 쿼리 파라미터를 핸들링하는 메서드들이 담긴 객체
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({
            detail: detail === 'true' ? false : true,
            mode
        });
    };

    const onIncreaseMode  = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({
            detail,
            mode: nextMode
        });
    };
    
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle Detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};