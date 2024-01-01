import React from "react";
import { useLocation } from "react-router-dom";

export const About = () => {
    const location = useLocation();
    
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
            <p>쿼리스트링: {location.search}</p>
        </div>
    );
};