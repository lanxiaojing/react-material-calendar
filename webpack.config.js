'use strict';


const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const allowedEnvs = ['dev', 'test', 'dist'];

const port = 8800;

let webpack = require('webpack');
let BowerWebpackPlugin = require('bower-webpack-plugin');

const baseConfig = {
    entry: path.join(__dirname, 'example', 'src', 'index.jsx'),
    output: {
        filename: 'bundle.js'
    },

    module: {
        use: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0,presets[]=stage-2,presets[]=stage-3'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    devServer: {
        proxy: {

        },
        hot: true,
    },
}

let env,
    config;
if (args._.length > 0 && arg._.indexOf('start') !== -1) {
    env = 'test';
    config = baseConfig;
} else if (args.env) {
    env = args.env;
    config = baseConfig;
} else {
    env = 'dev';
    config = Object.assign({}, baseConfig, {
        entry: [
            'webpack-dev-server/client?http://127.0.0.1:' + port,
            'webpack/hot/only-dev-server',
            './src/index'
        ],
        cache: true,
        devtool: 'eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new BowerWebpackPlugin({
                searchResolveModulesDirectories: false
            })
        ]
    });
    config.module.loaders.push({
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel-loader',
        include: [].concat(
            config.additionalPaths,
            [path.join(__dirname, '/../src')]
        )
    });
}
process.env.REACT_WEBPACK_ENV = env;



module.exports = config