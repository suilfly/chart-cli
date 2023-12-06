import { useState } from 'react';

export default function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
}
