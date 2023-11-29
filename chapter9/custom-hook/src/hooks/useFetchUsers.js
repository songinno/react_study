import {useState} from "react";
import axios from "axios";

// 사용자 목록을 얻는 사용자 정의 훅
export const useFetchUsers = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchUser = () => {
        // 버튼 클릭 시, 로딩 on, 에러 플래그 off
        setIsLoading(true);
        setIsError(false);
    
        // API 실행
        axios
          .get("https://example.com/users")
          .then(result => {
            // 성과 이름을 결합하도록 반환
            const users = result.data.map(user => ({
              id: user.id,
              name: `${user.lastname} ${user.firstname}`,
              age: user.age
            }));
    
            // 사용자 목록 State 업데이트
            setUserList(users);
          })
          // 에러 발생 시, 에러 플래그 ON
          .catch(() => setIsError(true))
          // 처리 완료 후, 로딩 플래그 OFF
          .finally(() => setIsLoading(false));
      };

    // 모아서 반환할 객체에 설정하기 (객체 생략 표기법)
    return {
        userList, 
        isLoading,
        isError,
        onClickFetchUser
    };
};