let webpack = require('webpack');
let path =require("path");
console.log("this is biz page")
module.exports = {
    resolve: {
        alias: {
            '@router': `${path.resolve(__dirname, 'router')}`,
            '@mobx': `${path.resolve(__dirname, 'mobx')}`,
            'ajax': `${path.resolve(__dirname, 'static/module/ajax.ts')}`,
            'ajaxLoading': `${path.resolve(__dirname, 'mobx/ajaxLoading.ts')}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            Ajax: 'ajax'
        })
    ]
}