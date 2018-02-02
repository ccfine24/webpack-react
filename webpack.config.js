const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    index: __dirname + "/src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    // publicPath: "http://cdn.com/",
    filename: "[name]-[hash].js"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: __dirname + "/build",
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  module: {
    rules:[
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
            // options: {
            //   modules: true
            // }
          },
          {
            loader: "postcss-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jade$/,
        loader: "jade-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: __dirname + "/src/index.jade"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style.css"),
    new CleanWebpackPlugin('build/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
};