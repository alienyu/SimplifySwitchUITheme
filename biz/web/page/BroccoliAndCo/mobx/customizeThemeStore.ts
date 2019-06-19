import * as React from 'react';
import { observable, action, computed } from 'mobx';
import themeConf from '../mulThemeConf';

export default class customizeThemeStore {
    @observable currentThemeKey = 'default';
    @computed get currentTheme(): any {
        return (themeConf as any)[`${this.currentThemeKey}Theme`];
    }

    @action changeThemeKey(val: string): void {
        this.currentThemeKey = val;
    }
}