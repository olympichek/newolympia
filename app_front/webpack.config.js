const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    entry: {
        main: "./js/router/load.js"
    },
    output: {
        path: path.join(__dirname, "../public/js"),
        publicPath: "/public/js/",
        filename: "bundle.js",
        chunkFilename: "[name].bundle.js"
    },
    resolve: {
        alias: {
            Libs: path.resolve(__dirname, "../libs/"),
            Components: path.resolve(__dirname, "./js/components"),
            Modules: path.resolve(__dirname, "./js/modules"),
            Services: path.resolve(__dirname, "./js/services"),
        }
    },
    context: path.resolve(__dirname, "./"),
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "./js"),
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                include: path.resolve(__dirname, "./js"),
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ],
                include: path.resolve(__dirname, "./js"),
            },
            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                include: path.resolve(__dirname, "./js"),
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
