let webpack = require('webpack');
var { resolveTsconfigPathsToAlias } = require('../../../../build/env/util.js');
var alias = resolveTsconfigPathsToAlias();

module.exports = {
    resolve: { alias },
    plugins: [
        new webpack.ProvidePlugin({
            Ajax: ['ajax', 'default'],
            Constants: ['Constants', 'default'],
            getMulThemeProps: ['getMulThemeProps', 'default']
        })
    ]
}