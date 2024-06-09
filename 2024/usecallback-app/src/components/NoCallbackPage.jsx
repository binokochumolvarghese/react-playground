import { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleClick = () => {
    console.log('Button clicked', count);
  };

  console.log(handleClick === handleClick);
  
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default Counter;