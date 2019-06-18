import * as React from 'react';
import { observable, action } from 'mobx';
import themeConf from '../mulThemeConf';

class customThemeClass {
    @observable currentTheme = themeConf['defaultTheme'];

    @action changeTheme(val: any): void {
        this.currentTheme = (themeConf as any)[`${val}Theme`]
    }
}

var customTheme = new customThemeClass();

module.exports = customTheme;