'use strict';

require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');


new WebpackDevServer(webpack(config), config.devServer).listen(config.devServer.port, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('listen at localhost: ' + config.devServer.port);
    open('http://localhost:' + config.devServer.port + '/webpack-dev-server/');
})