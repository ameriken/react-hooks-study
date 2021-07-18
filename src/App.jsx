import React, { createContext, useState } from 'react';
import { Address, Counter, Counter2, Counter3, Parent } from './components/index';

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

      <p>useReducerのサンプル１です</p>
      <Counter3 />

      <p>useReducerのサンプル２です</p>
      <Address />
    </div>
  );
}

export default App;
