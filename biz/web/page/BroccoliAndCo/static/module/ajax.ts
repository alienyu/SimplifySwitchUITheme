import * as React from 'react'
import { message } from 'antd';
import Axios from 'axios';
import {observer} from 'mobx-react/index';
var AjaxLoading = require('@mobx/ajaxLoading');

declare var Object:any;

@observer
class Ajax extends React.Component<{}, {}> {
    ajax(ops: any): any {
        let config = Object.assign({
            url: "",
            data: "",
            method: "post",
            handlerErr: false,
            callback: function() {}
        }, ops);
        AjaxLoading.changeStatus(true);
        Axios({
            method: config.method,
            url: config.url,
            data: config.data
        }).then((data: any) => {
            AjaxLoading.changeStatus(false);
            config.callback.call(this, Object.assign({success: true}, data));
        }).catch((error: any) => {
            AjaxLoading.changeStatus(false);
            if(config.handlerErr) {
                config.callback.call(this, Object.assign({success: false}, error.response));
            } else {
                message.error(error.response.data.errorMessage);
            }
        }) 
    }
}

const ajaxObj = new Ajax({}, {});
module.exports = ajaxObj.ajax;
