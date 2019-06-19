import * as React from 'react';
import { observable, action } from 'mobx';

export default class ajaxLoadingStore {
    @observable status = false;

    @action changeStatus(val: any): void {
        this.status = val;
    }
}