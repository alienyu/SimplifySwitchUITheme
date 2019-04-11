import * as React from 'react'
import { message } from 'antd';
import Axios from 'axios';
import {observer} from 'mobx-react/index';
import AjaxLoading from '@mobx/ajaxLoading';

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
        Axios({
            method: config.method,
            url: config.url,
            data: config.data
        }).then((data: any) => {
            AjaxLoading.changeStatus(false);
            if(data.status == 200) {
                config.callback.call(this, data);
            } else {
                message.error("Server Error!");
            }
        }).catch((error: any) => {
            message.error("Server Error!");
            AjaxLoading.changeStatus(false);
        }) 
    }
}

const ajaxObj = new Ajax({}, {});
module.exports = ajaxObj.ajax;
