import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/velopert">velopert 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
            </ul>

        </div>
    );
};