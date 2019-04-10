let webpack = require('webpack');
let path =require("path");
console.log("this is biz page")
module.exports = {
    resolve: {
        alias: {
            'components': `${path.resolve(__dirname, 'components')}`,
            'routers': `${path.resolve(__dirname, 'routes')}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({

        })
    ]
}