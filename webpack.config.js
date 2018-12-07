const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return ({
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "index.bundle.js"
        },
        mode: argv.mode,
        devtool: isDevelopment
            ? '#eval-source-map'
            : 'source-map',
        devServer: {
            stats: {
                children: false,
                maxModules: 0
            },
            port: 3001,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    },
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: "./index.html" }),
        ]
    })
};