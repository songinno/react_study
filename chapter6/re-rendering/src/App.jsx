import { useState, memo, useCallback } from "react"; // memo 추가
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
    console.log("App 렌더링");

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        console.log("버튼 클릭! -> State 변경");
        setNum(num + 1);
    };

    // 함수 메모이제이션(useCallback)
    const onClickReset = useCallback(() => {
        console.log("리셋 버튼 클릭!!!");
        setNum(0);
    }, []);

    return (
        <>
            <button onClick={onClickButton}>버튼</button>    
            <p>{num}</p>
            {/* Props로 함수 설정 */}
            <Child1 onClickReset={onClickReset} />
            <Child4 /> 
        </>
    );
});