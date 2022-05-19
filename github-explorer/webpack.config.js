const path = require('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: path.resolve(__dirname,'src', 'index.jsx'),
    mode: isDevelopment? 'development': 'production',
    //Facilita o entendimento do código dentro do console do browser
    devtool: isDevelopment? 'eval-source-map': 'source-map',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json", ".jsx"],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public")
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })],
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            
        ]
    }
}