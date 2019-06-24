require("./BroccoliAndCo.less");
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react';
import * as stores from './mobx/store';
import 'antd/dist/antd.css'
import Index from './index';

ReactDOM.render(
    <Provider { ...stores }>
        <Index />
    </Provider>,
    document.getElementById("app")
);
