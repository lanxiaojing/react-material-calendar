const path = require('path');

const port = 8900;
const srcPath = path.join(__dirname, '../components');
const devPath = path.join(__dirname, '../src');

const defaultModules = {
    loaders: [
        {
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
                            "utils": srcPath + "/utils",
                            'components': srcPath,
                        }
                    }]
                ]
            }
        },
        {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.(less)$/,
            exclude: /^node_modules$/,
            loader: 'style-loader!css-loader!less-loader'
        }
    ]
}

const baseConfig = {
    entry: [
        `webpack-dev-server/client?http://127.0.0.1:${port}`,
        'webpack/hot/only-dev-server',
        devPath + '/index.js'
    ],
    output: {
        filename: 'index.js',
        path: devPath,
    },
    devServer: {
        contentBase: devPath,
        watchContentBase: true,
        hot: true,
        open: true,
        inline: true,
        port: port,
    },
    // resolve: {
    //     extensions: ['.js', '.jsx'],
    //     alias: {
    //         components: srcPath,
    //         config: `${devPath}/config/` + process.env.REACT_WEBPACK_ENV,
    //     }
    // },
    module: {},
}


module.exports = {
    port: port,
    srcPath: srcPath,
    devPath: devPath,
    defaultModules: defaultModules,
    baseConfig: baseConfig
}