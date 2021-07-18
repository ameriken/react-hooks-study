// useContextのサンプルコードです。

import React from 'react';
// Childをimportする。
import { Child } from './index';

const Parent = () => {
    return (
        <>
            <Child />
            <div className='line'></div>
        </>
    )
}

export default Parent
