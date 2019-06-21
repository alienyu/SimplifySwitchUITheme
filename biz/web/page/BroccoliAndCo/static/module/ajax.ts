import * as React from 'react'
import { message } from 'antd';
import Axios from 'axios';
var { ajaxLoadingStore } = require('@mobx/store')
// import { ajaxLoadingStore } from '@mobx/store';

class Ajax {
    ajax(ops: any): any {
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
        }).then((data: any) => {
            ajaxLoadingStore.changeStatus(false);
            config.callback.call(this, Object.assign({success: true}, data));
        }).catch((error: any) => {
            ajaxLoadingStore.changeStatus(false);
            if(config.handlerErr) {
                config.callback.call(this, Object.assign({success: false}, error.response));
            } else {
                message.error(error.response.data.errorMessage);
            }
        }) 
    }
}

var ajaxObj = new Ajax();
export default ajaxObj.ajax;
