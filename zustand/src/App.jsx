import React from 'react'
import { useMemoStore } from './store/MemoList';
import MemoBoard from './components/MemoBoard';
import MemoElem from './components/MemoElem';
import MemoInput from './components/MemoInput'

export const App = () => {

  const { memoList } = useMemoStore();

  return (
    <>
      <MemoBoard>
        {memoList.length ? (
          memoList.map(memo => {
            return (
              <MemoElem key={memo.id} id={memo.id}>
                {memo.content}
              </MemoElem>
            );
          })
        ) : (
          <span>메모를 입력해주세요.</span>
        )}
      </MemoBoard>
      <MemoInput />
    </>
  );
};