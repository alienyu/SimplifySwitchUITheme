import * as React from 'react';
import { observable, action } from 'mobx';

class ajaxLoading {
    @observable status = false;

    @action changeStatus(val: any): void {
        this.status = val;
    }
}

var loading = new ajaxLoading();

export default loading;