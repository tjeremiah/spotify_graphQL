"use strict"

const path = require("path");

module.exports = {
    entry: './index.js', // assumes your entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
      path: __dirname, // assumes your bundle.js will also be in the root of your project folder
      filename: 'bundle.js'
    },
    //devtool: 'source-maps',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    }    
}