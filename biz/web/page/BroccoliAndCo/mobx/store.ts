import AjaxLoadingStore from './ajaxLoadingStore';
import CustomizeThemeStore from './customizeThemeStore';

const ajaxLoadingStore = new AjaxLoadingStore();
const customizeThemeStore = new CustomizeThemeStore();

const stores = {
    ajaxLoadingStore,
    customizeThemeStore
}

module.exports = stores;