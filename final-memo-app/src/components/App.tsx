import {useState, FC, ChangeEvent, useCallback} from 'react';
import styled from "styled-components";
import { MemoList } from './MemoList';

export const App: FC = () => {
  console.log("App 렌더링");
  
  // 텍스트 박스 State
  const [text, setText] = useState<string>("");
  // 메모 목록 State
  const [memoList, setMemoList] = useState<string[]>([]);

  // 텍스트 박스 입력 시, 입력 내용을 State에 설정
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 추가 버튼 클릭
  const onClickAdd = () => {
    // State 변경을 정상적으로 감지하기 위해 새로운 배열 생성
    const newMemoList = [...memoList];

    // 텍스트 박스 입력 내용을 메모 배열에 추가
    newMemoList.push(text);
    setMemoList(newMemoList);

    // 텍스트 박스 비우기
    setText("");
  };

  // 삭제 버튼 클릭 (몇 번째 버튼이 클릭되었는지 인수로 전달)
  const onClickDelete = useCallback((index: number) => {
    
    // State 변경 정상 감지를 위해 신규 배열 생성
    const newMemoList = [...memoList];
    // 메모 배열로부터 해당 요소 삭제
    newMemoList.splice(index, 1);
    setMemoList(newMemoList);
  }, [memoList]);

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