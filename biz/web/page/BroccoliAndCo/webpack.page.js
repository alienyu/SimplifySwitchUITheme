let webpack = require('webpack');
let path = require("path");
const { resolve } = require('path')
var { resolveTsconfigPathsToAlias } = require('../../../../build/env/util.js');
var alias = resolveTsconfigPathsToAlias();

module.exports = {
    resolve: { alias },
    plugins: [
        new webpack.ProvidePlugin({
            Ajax: ['ajax', 'default']
        })
    ]
}