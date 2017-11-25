'use strict';

const config = require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 3001,
        publicPath: '/',
        stats: 'errors-only',
        historyApiFallback: true,
        contentBase: 'build'
    },
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filetype: 'html',
            template: 'pug-loader!./src/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPugPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                        cacheDirectory: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                use: ['file-loader']
            }
        ]
    }
};