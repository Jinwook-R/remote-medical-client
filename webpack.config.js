const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [{test: /\.js$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.png$/,use:[{loader:'file-loader', options:{name: '[name].[ext]?[hash]'}}]},
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimizer: []
    },
    plugins: [new HtmlWebpackPlugin({template: "./public/index.html"}),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: __dirname,
        port: 9000,
        historyApiFallback: true
    },
}