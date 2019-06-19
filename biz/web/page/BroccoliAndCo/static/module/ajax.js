import * as React from 'react'
import { message } from 'antd';
import Axios from 'axios';
import {observer, inject} from 'mobx-react/index';

const ajax = inject('ajaxLoadingStore')(observer(({ajaxLoadingStore, ops}) => {
    let config = Object.assign({
        url: "",
        data: "",
        method: "post",
        handlerErr: false,
        callback: function() {}
    }, ops);
    ajaxLoadingStore.changeStatus(true);
    Axios({
        method: config.method,
        url: config.url,
        data: config.data
    }).then((data) => {
        ajaxLoadingStore.changeStatus(false);
        config.callback.call(this, Object.assign({success: true}, data));
    }).catch((error) => {
        ajaxLoadingStore.changeStatus(false);
        if(config.handlerErr) {
            config.callback.call(this, Object.assign({success: false}, error.response));
        } else {
            message.error(error.response.data.errorMessage);
        }
    }) 
}));

export default ajax;
// @inject('ajaxLoadingStore')
// @observer
// class Ajax extends React.Component<Props, {}> {
//     ajax(ops: any): any {
//         const {ajaxLoadingStore } = this.props;
//         let config = Object.assign({
//             url: "",
//             data: "",
//             method: "post",
//             handlerErr: false,
//             callback: function() {}
//         }, ops);
//         ajaxLoadingStore.changeStatus(true);
//         Axios({
//             method: config.method,
//             url: config.url,
//             data: config.data
//         }).then((data: any) => {
//             ajaxLoadingStore.changeStatus(false);
//             config.callback.call(this, Object.assign({success: true}, data));
//         }).catch((error: any) => {
//             ajaxLoadingStore.changeStatus(false);
//             if(config.handlerErr) {
//                 config.callback.call(this, Object.assign({success: false}, error.response));
//             } else {
//                 message.error(error.response.data.errorMessage);
//             }
//         }) 
//     }
// }

// var ajaxObj = new Ajax({});
// export default ajaxObj.ajax;
