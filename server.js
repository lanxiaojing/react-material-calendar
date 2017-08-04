'use strict';

require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const port = 8800;
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer).listen(port, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('listen at localhost: ' + port);
    open('http://localhost:' + port + '/webpack-dev-server/');
})