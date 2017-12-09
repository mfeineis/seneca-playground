const path = require("path");
const webpack = require("webpack");

const MinifyPlugin = require("babel-minify-webpack-plugin");

function NullPlugin() {}
NullPlugin.prototype.apply = function (compiler) {};

module.exports = (env = {}, argv) => {
    const isProd = env.production;
    const isDev = !isProd;

    return {
        entry: {
            main: "./src/main.ts",
            service: "./src/service.ts",
        },
        module: {
            rules: [
                { test: /\.ts$/, use: 'ts-loader' },
            ],
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "dist"),
            pathinfo: isDev,
        },
        plugins: [
            isProd //argv['optimize-minimize']
                ? new MinifyPlugin({
                    mangle: { topLevel: true },
                })
                : new NullPlugin(),
        ],
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        target: "node",
        watch: isDev,
    };
};
