import React, { useEffect } from "react";

//          Component : 타이머 컴포넌트         //
export const Timer = (props) => {
  useEffect(() => {
    // ! 1초마다 콘솔에 로그를 찍는 타이머 함수
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중...");
    }, 1000);

    // ! clean up : 타이머 종료
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};
