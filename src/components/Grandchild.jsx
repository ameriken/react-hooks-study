// useContextのサンプルコードです。

import React, { useContext } from 'react';
import { SampleContext } from '../App';

const Grandchild = () => {
    // useContextの引数にApp.jsxで定義したSampleContextを渡す。
    const context = useContext(SampleContext);

    return (
        // contextの値を画面に出力する。
        <p>{ context }</p>
    )
}

export default Grandchild
