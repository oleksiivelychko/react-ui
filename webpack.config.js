const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { app: path.resolve(__dirname, 'src', 'index.js') },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    optimization: {
        splitChunks: { chunks: "all" }
    },

    performance: {
        hints: false,
        maxEntrypointSize: 5242880,
        maxAssetSize: 5242880
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        port: 8081,
        open: true
    },
};
