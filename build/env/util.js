const { resolve, join } = require('path');
module.exports = {
    resolveTsconfigPathsToAlias: ({
        tsconfigPath = `${resolve(__dirname, '../../tsconfig.json')}`,
        webpackConfigBasePath = process.cwd()} = {},
    ) => {
        const { paths } = require(tsconfigPath).compilerOptions;
        const aliases = {};
        Object.keys(paths).forEach((item) => {
            const key = item.replace('/*', '');
            const value = join(webpackConfigBasePath, paths[item][0].replace('/*', ''));
            aliases[key] = value;
        });
        return aliases;
    }
}