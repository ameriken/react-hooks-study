// useContextのサンプルコードです。

import React from 'react';
// Grandchildをimportする。
import { Grandchild } from './index';

const Child = () => {
    return (
        <Grandchild />
    )
}

export default Child
