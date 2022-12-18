const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// const mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
    entry: "./src/script.js",
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },
    devtool: process.env.NODE_ENV === "production" ? false : "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/img", to: "img" },
                { from: "src/statosskyeng-v1.001", to: "fonts" },
            ],
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({template: "index.html",}),
    ],
};