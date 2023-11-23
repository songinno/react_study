import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

/* Inline Styles 방법 */
const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px"
};

export const Child1 = memo((props) => {
    console.log("Child1 렌더링");
    // console.log(props); // {onClickReset: ƒ}

    // props로부터 함수 전개
    // props는 객체로 전달 됨 -> 객체 분할 대입
    const { onClickReset } = props;

    return (
        <div style={style}>
            <p>Child1</p>
            {/* 전달된 함수를 실행하는 버튼 설정 */}
            <button onClick={onClickReset}>리셋</button>
            <Child2 />
            <Child3 />
        </div>
    );
});
