import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  // This effect runs after the component renders.
  useEffect(() => {
    document.title = `Count: ${count}`;
    
    // Cleanup function (optional)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // The effect depends on the 'count' state.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
