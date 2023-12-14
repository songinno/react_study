import React from "react";

function Hello(props) {
    const {color, name, isSpecial} = props;
    return <div style={{color}}>
                {/* JSX에서 null, false, undefined를 렌더링 -> 아무것도 나타나지 않음 */}
                {/* {isSpecial ? <b>*</b> : null}  */}
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;