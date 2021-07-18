import React, { useRef } from 'react';

const Form1 = () => {
    const inputElement = useRef(null);
    const doClick = () => {
        // inputElement.currentで <input type="text" /> を参照できる。
        inputElement.current.focus();
        console.log('inputElement', inputElement.current);
    }

    return (
        <>
            <input ref={ inputElement } type='text' />
            <button onClick={ doClick }>入力欄をフォーカスする</button>
            <div className='line'></div>
        </>
    )
};

export default Form1
