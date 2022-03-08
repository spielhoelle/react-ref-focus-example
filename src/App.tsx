import React, { createRef } from 'react';
import './App.css';

function App() {
  const list = [1, 2, 3, 4, 5];
  const lineRefs: any = React.useRef([]);
  lineRefs.current = list.map((_, i) => lineRefs.current[i] ?? createRef());
  return (
    <>
      {list.map((item, i) => (
        <div
          key={item}>
          <input
            ref={lineRefs.current[i]}
            placeholder='Text...' />
          <button
            onClick={(e) => {
              lineRefs.current[i].current.focus()
            }}
          >{item}</button>
        </div>
      ))}
    </>
  );
}
export default App;
