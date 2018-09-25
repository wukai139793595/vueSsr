const path = require('path');
const root = path.resolve(__dirname, '..');
const vueLoaderPlugin =   require('vue-loader/lib/plugin')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: ['babel-polyfill', 
        path.join(root, './entry/entry-server.js')],
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(root, 'dist'),
        filename: 'bundle.server.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: root,
                exclude: /node-modules/
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin()
    ]
}