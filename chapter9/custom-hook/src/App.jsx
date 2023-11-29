import {useState} from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
  // State
  // 함수 실행 -> 반환값을 분할 대입해서 전달
  const {userList, isLoading, isError, onClickFetchUser} = useFetchUsers();


  return (
    <div>
      <button onClick={onClickFetchUser}>
        사용자 정보 얻기
      </button>
      {/* 에러 발생 시, 에러 메시지 표기 */}
      {/* 왼쪽이 참이면 오른쪽을 반환 */}
      {isError && <p style={{color: "red"}}>에러가 발생했습니다.</p>}

      {/* 로딩 중 표시 전환 */}
      {isLoading ? (<p>데이터를 가져오고 있습니다.</p>)
                  : (userList.map(user => (<p key={user.id}>{`${user.id} : ${user.name}(${user.age}세)`}</p>)))
      }
    </div>
  );
};