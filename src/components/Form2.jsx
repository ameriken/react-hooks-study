import React, { useRef, useState } from 'react';

const Form2 = () => {
    const inputElement = useRef(null);

    const [name, setName] = useState("太郎(※初期の名前です)");

    const doClick = () => {
        setName(inputElement.current.value);
    }

    console.log('再レンダリングされました！！');

    return (
        <>
            <input ref={ inputElement } type='text' />
            <button onClick={ doClick }>名前をセットする</button>
            <p>名前：{ name }</p>
            <div className='line'></div>
        </>
    )
};

export default Form2
