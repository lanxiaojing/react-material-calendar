'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));
let validEnv = ['dev', 'test', 'build'];
let env;

const conf = require('./configs');
// module.exports = conf.devConfig;

if (args._.length > 0 && arg._.indexOf('start') !== -1) {
    env = 'test';
} else if (args.env) {
    env = args.env;
} else {
    env = 'dev';
}

function getConfig(env='dev') {
    if(validEnv.indexOf(env) === -1) {
        env = 'dev';
    }
    
    process.env.REACT_WEBPACK_ENV = env;   // 用于之后项目开发时找到相应的src/config 文件
    let config = require(path.join(__dirname, 'config/' + env));
    return config
}

module.exports = getConfig(env);