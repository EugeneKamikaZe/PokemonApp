const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: [/node_modules/, path.resolve(__dirname, 'src/server/server.js')],
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-modules-typescript-loader?modules',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                auto: /\.module\.\w+$/i,
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                        },
                    }
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 3005,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'source-map',
};
