import { useState, useCallback } from 'react';
import DemoOutput from './DemoOutput';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const showOutput = useCallback( () => {
    setShow(!show);
  },[show]);

  return (
    <div className='green-box'>
      <h3>Using useCallback</h3>
      <p> count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <DemoOutput show={show} showOutput={showOutput}/>
    </div>
  );
};

export default Counter;