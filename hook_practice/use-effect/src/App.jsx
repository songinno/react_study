import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const countUpdateHandler = () => {
    setCount(count => count + 1)
  };

  const inputChangeHandler = (event) => {
    setName(event.target.value);
  };

  // ! 렌더링 될 때마다 매번 실행 - Mount 또는 Update 시
  useEffect(() => {
    console.log('렌더링 😺');
  });

  // ! Mount + name이 바뀔 때마만 실행
  useEffect(() => {
    console.log('count 변화 🐭');
  }, [count]);

  // ! 렌더링 + count가 바뀔 때만 실행
  useEffect(() => {
    console.log('name 변화 🐸');
  }, [name]);

  // ! Mount 시에만 실행
  useEffect(() => {
    console.log('Mount 🤷‍♂️');
  }, []);
  

  return (
    <div>
      <div>
        <button onClick={countUpdateHandler}>+1</button>
        <span>{`count: ${count}`}</span>
      </div>
      <div>
        <input type="text" value={name} onChange={inputChangeHandler}/>
        <span>{`name: ${name}`}</span>
      </div>
    </div>
  );
};

export default App;