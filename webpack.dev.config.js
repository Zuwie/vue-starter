const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry:  ['./src/scss/main.scss','./src/js/main.js'],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    publicPath: 'dist/',
    path: __dirname + '/dist',
    chunkFilename: '[id]-chunk.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          presets: [
            ["env", {
              "targets": {
                "browsers": ["last 2 versions", "ie >= 11"]
              }
            }]
          ],
          plugins: [require('babel-plugin-syntax-dynamic-import')],
          cacheDirectory: true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              publicPath: ''
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000      
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'vendor.js',
          chunks: 'all'
        }
      }
    }
  }
};
