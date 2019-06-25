import * as theme from 'styled-theming';
import themeConf from 'mulThemeConf';
import { get } from 'lodash';

declare const Constants: any;

type getCustomizeCmpParams = {
    customizeStyleCmpList: Array<string>,
    cmpNS: string,
}

/* 
    @params: {
        customizeStyleCmpList: dynamic style props. eg: ['textColor', 'buttonColor'],
        cmpNS: componments namespace(actually it's the file path relative to root path). eg: 'Home'
    }
*/
const getMulThemeProps = ({ customizeStyleCmpList, cmpNS }:getCustomizeCmpParams):any => {
    let customizeStyleCmp = {};
    customizeStyleCmpList.map((cmpKey: string) => {
        let styles = {};
        let defaultStyle = get((themeConf as any)[`defaultTheme`], `${cmpNS}.${cmpKey}`);
        (customizeStyleCmp as any)[cmpKey] = theme(
            Constants.theme, 
            Constants.platformList.map((pl:string) => {
                return Object.assign(styles, { [pl]: get((themeConf as any)[`${pl}Theme`], `${cmpNS}.${cmpKey}`, defaultStyle) });
            }).shift()
        );
    })
    return customizeStyleCmp;
}

export default getMulThemeProps;
