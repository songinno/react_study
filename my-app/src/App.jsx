import { useState } from "react";
import { useEffect } from "react";

// ColoredMessage import
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    // State 정의 - 초깃값 : 0
    const [num, setNum] = useState(0);

    // useEffect : State 값이 변했을 때만 alert 표시
    useEffect(() => {
        alert();
    }, [num]);

    // 버튼 클릭 시, State 카운트업
    const onClickButton = () => {
        setNum(n => n + 1);
    };

    return (
        <>
            {console.log("Test")}
            <h1 style={{color: "red"}}>안녕하세요!</h1>
            {/* 컴포넌트 태그 안에 전달할 임의의 이름과 값 설정 */}
            {/* <ColoredMessage color="blue" message="잘 지내시죠?"/> */}
            {/* <ColoredMessage color="pink" message="잘 지냅니다!"/> */}

            {/* 텍스트(message)를 children으로 전달하기 */}
            <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
            <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
        </>
    );
};
