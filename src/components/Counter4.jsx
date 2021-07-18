// // useEffectのサンプルコード1です。

// // 関数コンポーネントでuseCallbackを使用するためにインポートする。
// import React, { useState } from 'react';
// import '../style.css';

// // タイトルコンポーネント（子）を定義する。
// const Title = () => {
//     console.log('★Title component');
//     return (
//         <p>useCallBackの再レンダーを検証</p>
//     )
// };

// // ボタンコンポーネント（子）を定義する。
// const Button = (props) => {
//     console.log('★Button component', props.name);
//     return (
//         <button onClick={ props.doClick }>{ props.name }</button>
//     )
// };

// // カウンターコンポーネント（子）を定義する。
// const CounterText = (props) => {
//     console.log('★Count child component', props.text);
//     return (
//         <p>{props.text}:{props.state}</p>
//     )
// };

// const Counter4 = () => {
//     const [firstCounter, setFirstCounter] = useState(0);
//     const [secondCounter, setSecondCounter] = useState(100);

//     // +1する関数を定義する。
//     const coutUpFirstCounter = () => {
//         setFirstCounter(firstCounter + 1);
//     };

//     // +100する関数を定義する。
//     const coutUpSecoundCounter = () => {
//         setSecondCounter(secondCounter + 100);
//     };

//     return (
//         <>
//             <Title />
//             <CounterText text="+1 ボタンによるカウント" state={ firstCounter }/>
//             <CounterText text="+100 ボタンによるカウント" state={ secondCounter } />
//             <Button name="+1" doClick={ coutUpFirstCounter }/>
//             <Button name="+100" doClick={ coutUpSecoundCounter }/>
//             <div className='line'></div>
//         </>
//     )
// }

// export default Counter4


// // useEffectのサンプルコード2です。

// // 関数コンポーネントでuseCallbackを使用するためにインポートする。
// import React, { useState } from 'react';
// import '../style.css';

// // タイトルコンポーネント（子）を定義する。
// const Title = React.memo(() => {
//     console.log('★Title component');
//     return (
//         <p>useCallBackの再レンダーを検証</p>
//     )
// });

// // ボタンコンポーネント（子）を定義する。
// const Button = React.memo((props) => {
//     console.log('★Button component', props.name);
//     return (
//         <button onClick={ props.doClick }>{ props.name }</button>
//     )
// });

// // カウンターコンポーネント（子）を定義する。
// const CounterText = React.memo((props) => {
//     console.log('★Count child component', props.text);
//     return (
//         <p>{props.text}:{props.state}</p>
//     )
// });

// const Counter4 = () => {
//     const [firstCounter, setFirstCounter] = useState(0);
//     const [secondCounter, setSecondCounter] = useState(100);

//     // +1する関数を定義する。
//     const coutUpFirstCounter = () => {
//         setFirstCounter(firstCounter + 1);
//     };

//     // +100する関数を定義する。
//     const coutUpSecoundCounter = () => {
//         setSecondCounter(secondCounter + 100);
//     };

//     return (
//         <>
//             <Title />
//             <CounterText text="+1 ボタンによるカウント" state={ firstCounter }/>
//             <CounterText text="+100 ボタンによるカウント" state={ secondCounter } />
//             <Button name="+1" doClick={ coutUpFirstCounter }/>
//             <Button name="+100" doClick={ coutUpSecoundCounter }/>
//             <div className='line'></div>
//         </>
//     )
// }

// export default Counter4

// // useEffectのサンプルコード3です。

// 関数コンポーネントでuseCallbackを使用するためにインポートする。
import React, { useCallback, useState } from 'react';
import '../style.css';

// タイトルコンポーネント（子）を定義する。
const Title = React.memo(() => {
    console.log('★Title component');
    return (
        <p>useCallBackの再レンダーを検証</p>
    )
});

// ボタンコンポーネント（子）を定義する。
const Button = React.memo((props) => {
    console.log('★Button component', props.name);
    return (
        <button onClick={ props.doClick }>{ props.name }</button>
    )
});

// カウンターコンポーネント（子）を定義する。
const CounterText = React.memo((props) => {
    console.log('★Count child component', props.text);
    return (
        <p>{props.text}:{props.state}</p>
    )
});

const Counter4 = () => {
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(100);

    // +1する関数を定義する。
    const coutUpFirstCounter = useCallback(() => {
        setFirstCounter(firstCounter + 1);
    }, [firstCounter]);

    // +100する関数を定義する。
    const coutUpSecoundCounter = useCallback(() => {
        setSecondCounter(secondCounter + 100);
    }, [secondCounter]);

    return (
        <>
            <Title />
            <CounterText text="+1 ボタンによるカウント" state={ firstCounter }/>
            <CounterText text="+100 ボタンによるカウント" state={ secondCounter } />
            <Button name="+1" doClick={ coutUpFirstCounter }/>
            <Button name="+100" doClick={ coutUpSecoundCounter }/>
            <div className='line'></div>
        </>
    )
}

export default Counter4
