const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const PostCSSCSSNext = require('postcss-cssnext');
const CSSNano = require('cssnano');

module.exports = {
    entry: path.resolve(__dirname,'src') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [
                        { loader: 'css-loader' },
                        { 
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                syntax: 'postcss-scss',
                                plugins: () => [
                                    PostCSSCSSNext(),
                                    CSSNano({
                                        autoprefixer: false
                                    })
                                ]
                            }
                        },
                        { loader: 'sass-loader' }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader'
                }  
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash].[ext]',
                            publicPath: '',
                            outputPath: 'img'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Wise Living Cañada',
            filename: 'index.html',
            template: path.resolve(__dirname,'src')+'/index.html',
            favicon: path.resolve(__dirname,'src')+'/favicon.png',
            cache: true
        }),
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].css'
        })
    ]
};