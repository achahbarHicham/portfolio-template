const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "images/[name].[ext]",
  },
  // if you wanna develope change to development
  mode:"production",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader:MiniCssExtractPlugin.loader,
            options:{publicPath:""}
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
       {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Portfolio',
        template:'./src/index.html'
      }),
      new MiniCssExtractPlugin({ 
        filename: "[name].[hash].css" 
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
 }

  
};