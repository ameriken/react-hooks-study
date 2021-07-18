import React, { createContext, useState } from 'react';
import { API, Counter, Counter2, Counter3, Counter4, Counter5, Parent } from './components/index';

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
      <API />

      <p>useCallbackのサンプルです</p>
      <Counter4 />

      <p>useMemoのサンプルです</p>
      <Counter5 />
    </div>
  );
}

export default App;
