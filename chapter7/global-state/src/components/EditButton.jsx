// "react"에서 useContext를 import
import { useContext } from "react";

// 작성한 Context를 import
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px",
};

export const EditButton = () => {
    // console.log(useContext(AdminFlagContext)); // {isAdmin: false, setIsAdmin: ƒ}
    // Context 안의 isAdmin을 얻음
    const {isAdmin} = useContext(AdminFlagContext);
    // console.log(isAdmin); // 초깃값 : false

    // isAdmin이 false일 때, 버튼 비활성화(disabled=true)
    return (
        <button style={style} disabled={!isAdmin}>
            수정
        </button>
    );
};