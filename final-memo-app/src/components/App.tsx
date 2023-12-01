import {useState, FC, ChangeEvent, useCallback, useMemo} from 'react';
import styled from "styled-components";
import { MemoList } from './MemoList';
import { useMemoList } from '../hooks/useMemoList';

export const App: FC = () => {
  // console.log("App 렌더링");

  // 사용자 정의 훅으로을 부터 변수와 함수 얻기
  const {memoList, addTodo, deleteTodo} = useMemoList()
  
  // 텍스트 박스 State
  const [text, setText] = useState<string>("");

  // 텍스트 박스 입력 시, 입력 내용을 State에 설정
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 추가 버튼 클릭
  const onClickAdd = () => {
    addTodo(text);

    // 텍스트 박스 비우기
    setText("");
  };

  // 삭제 버튼 클릭 (몇 번째 버튼이 클릭되었는지 인수로 전달)
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <div>
      <h1>메모 애플리케이션</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>추가</SButton>
      <MemoList memoList={memoList} onClickDelete={onClickDelete}></MemoList>
    </div>
  )
};

/* CSS 적용 - styled components */
const SButton = styled.button`
  margin-left: 16px;
`;