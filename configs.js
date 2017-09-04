"use strict"

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const devPath = path.join(__dirname, './src');
const port = 8080;

var devConfig = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:' + port,
        'webpack/hot/only-dev-server',
        devPath + '/index.js'
    ],
    cache: true,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'calendar example',
            template: devPath + '/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: 'index.js',
        path: devPath,
    },
    devtool: 'source-map',
    devServer: {
        contentBase: devPath,
        watchContentBase: true,
        hot: true,
        open: true,
        inline: true,
        port: port
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: devPath,
            query: {
                babelrc: false,
                presets: ['es2015', 'stage-0', 'react'],
                plugins: [
                    ["module-resolver", {
                        "root": ["./"],
                        "alias": {
                            "src": devPath,
                            "utils": devPath + "/utils",
                        }
                    }]
                ]
            }
        },
        {
            test: /\.(less)$/,
            exclude: /^node_modules$/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    }
}

var buildConfig = {
    // entry: {
    //     index: './src/index.js',
    // },
    // externals: {
    //     'moment': {
    //         commonjs: "moment",
    //         commonjs2: "moment",
    //         amd: "moment",
    //         root: "moment"
    //     },
    //     react: {
    //         root: 'React',
    //         commonjs2: 'react',
    //         commonjs: 'react',
    //         amd: 'react',
    //     },
    //     'react-dom': {
    //         root: 'ReactDOM',
    //         commonjs2: 'react-dom',
    //         commonjs: 'react-dom',
    //         amd: 'react-dom',
    //     },
    // },
    // plugins: [
    //     new CleanWebpackPlugin(['lib']),
    //     new ExtractTextPlugin("style.css")
    // ],
    // output: {
    //     filename: 'react-material-calendar.js',
    //     path: path.resolve(__dirname, 'lib'),
    //     library: 'Calendar',
    //     libraryTarget: 'umd',
    // },
    // module: {
    //     loaders: [{
    //         test: /\.js$/,
    //         loader: 'babel-loader',
    //         exclude: /(node_modules)/,
    //         query: {
    //             babelrc: false,
    //             presets: ['es2015', 'stage-0', 'react'],
    //         }
    //     },
    //     {
    //         test: /\.(less|css)$/,
    //         loader: 'style-loader!css-loader'
    //     },
    //     {
    //         test: /\.(less|css)$/,
    //         use: ExtractTextPlugin.extract({
    //             fallback: 'style-loader',
    //             use: ['css-loader', 'less-loader']
    //         })
    //     }]
    // }
}

module.exports = {
    devConfig: devConfig,
    buildConfig: buildConfig
}

// module.exports = buildConfig