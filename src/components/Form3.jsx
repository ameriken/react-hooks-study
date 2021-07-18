import React, { useState } from 'react';

const Form3 = () => {
    const [inputtedValue, setInputtedValue] = useState("");
    const [name, setName] = useState("太郎(※初期の名前です)");

    const doClick = () => {
        setName(inputtedValue);
    }

    const updataName = (event) => {
        setInputtedValue(event.target.value);
    };

    console.log('再レンダリングされました！！');

    return (
        <>
            <input
                value={inputtedValue}
                onChange={ updataName }
                type='text'
            />
            <button onClick={ doClick }>名前をセットする</button>
            <p>名前：{ name }</p>
            <div className='line'></div>
        </>
    )
};

export default Form3
