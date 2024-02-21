import React, { useRef } from 'react';
import { MyInput } from './components/MyInput';

export const App = () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{display: 'flex'}}>
      <MyInput ref={inputRef} />
      <button onClick={focus}>버튼</button>
    </div>
  );
};