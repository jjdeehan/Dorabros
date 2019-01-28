var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {

  entry: './client/src/index.js',
  output: {
    publicPath:"https://dorabros.com/public",
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/src/public/dist')
  },
  optimization:{
    minimizer:[new UglifyJsPlugin()]
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
  extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015', 'stage-1'],
        sourceMap: true
      }
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {    
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: "file-loader"
    },
    {
    test: /\.(gif|png|jpe?g|jpg|svg)$/i,
    use: [
      'url-loader',
      {
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true, // webpack@2.x and newer
      },
    },
  ],
}
  ]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true})
  ]
};
