import React, { useMemo, useState } from 'react';
import '../style.css';

const Counter5 = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const countUpCounter1 = () => {
        setCounter1(counter1 + 1);
    };
    const countUpCounter2 = () => {
        setCounter2(counter2 + 100);
    };

    const weightFunction = useMemo(() => {
        // 重い処理を実行する。
        let i = 0;
        while (i < 1000000000) {
            i++;
        };

        return counter2 * counter2;
    }, [counter2]);

    return (
        <>
            <p>カウンター１: {counter1}</p>
            <p>カウンター２: {counter2}</p>
            <p>weightFunctionResult: {weightFunction}</p>
            <button onClick={countUpCounter1}>+1</button>
            <button onClick={countUpCounter2}>+100</button>
            <div className='line'></div>
        </>
    );
};

export default Counter5
