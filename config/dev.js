const path = require('path');
const defaultSetting = require('./_defaults');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = Object.assign({}, defaultSetting.baseConfig, {
    cache: true,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'calendar example',
            template: defaultSetting.devPath + '/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map',
    module: defaultSetting.defaultModules
});


module.exports = config;