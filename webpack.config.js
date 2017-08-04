'use strict';


const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const allowedEnvs = ['dev', 'test', 'dist'];

const port = 8800;

let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

const baseConfig = {
    entry: './example/src/index.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0,presets[]=stage-2,presets[]=stage-3'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],
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
            './example/index.html'
        ],
        cache: true,
        devtool: 'eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
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