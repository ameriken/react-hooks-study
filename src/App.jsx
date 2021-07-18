import React, { createContext, useState } from 'react';
import { Counter, Counter2, Parent } from './components/index';

//createContextで、SapmleContextを作成する。
export const SampleContext = createContext();

function App() {
  const [sampleContext, setSampleContext] = useState('★★useContextの値です★★');

  return (
    <div>
      <p>useStateのサンプルです</p>
      <Counter />

      <p>useEffectのサンプルです</p>
      <Counter2 />

      <p>useContextのサンプルです</p>
      <SampleContext.Provider value={ sampleContext }>
        <Parent />
      </SampleContext.Provider>
    </div>
  );
}

export default App;
