const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry :'./src/index.js', //entry point of application
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'bundle.js'
  },
  module : {
      rules : [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use : 'babel-loader'
      },
      {
          test:/\.css$/,
          use : ['css-loader','style-loader','postcss-loader',  MiniCssExtractPlugin.loader,]
      }
        
      ]
  },

  // devServer: {
  //   //contentBase: path.resolve(__dirname, 'dist'),
  //   port: 3000,
  //   host: 'localhost'
  // },
  plugins: [
    // Existing plugins...
    new htmlPlugin({
      template: './src/index.html', // Path to your HTML template file
      // Other options...
    }),
    new MiniCssExtractPlugin(),
  ],
  
};
