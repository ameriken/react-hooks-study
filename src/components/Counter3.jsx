import React, { useReducer } from 'react';

const Conter3 = () => {
    // reducerの関数を定義する。
    // stateとactionを引数に渡して、stateを更新する関数。
    const reducerFunction = (state, action) => {
        // actionのタイプによるstateの更新処理を記述する。
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                return state;
        }
    };

    // useReducerの引数にreducerの関数とステートの初期値を渡す。
    const [counter, dispatch] = useReducer(reducerFunction, 0);
    return (
        <>
            <p>カウント：{counter}</p>
            <button onClick={() => dispatch('increment')}>+1</button>
            <button onClick={() => dispatch('decrement')}>-1</button>
            <button onClick={() => dispatch('reset')}>RESET</button>
            <div className='line'></div>
        </>
    )
}

export default Conter3
