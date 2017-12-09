const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
// to produce separate bundle file
// we put dependencies here that commonly used and not changed
"faker",
"lodash",
"react",
"react-dom",
"react-input-range",
"react-redux",
"react-router",
"redux",
"redux-form",
"redux-thunk",
];

module.exports = {
  // this is where webpack will start importing all files to be compiled to bundle.js
  // entry: './src/index.js',  <-If there is not to much code
  entry: {
    // we can pass multible entry points
    bundle:'./src/index.js',
    vendor: VENDOR_LIBS
    
},
  output: {
    // this is where bundle.js will be stored
    path: path.join(__dirname, 'dist'),
    // name of the file under which the compiled css will be stored
    // or bundle.js 
    // [name].js => interpelated name
    // every time when updated [chunkhash] wil automaticaly create new file and update will
    // be fired in the browser, hey file was changed ? => update
    filename: '[name].[chunkhash].js'

  },
  // setting up rules
  module:{
    rules :[
      {
        // we tell use babel loader to compile ES6 -> ES5
        // NB Make sure .babelrc
        use: 'babel-loader',
        // we setup RegEx for which files it will be applied
        test: /\.js$/,
        // and we need to exclude node modules since they are already compiled to ES5
        exclude: /node_modules/
      },
      // now we add loaders for css
      {
        // make note !Loaders are being loaded from right to left ,so css-loader will be first .etc
        use: ['style-loader','css-loader'],
        // specify css
        test: /\.css$/
      }
    ]
    // asset caching => will ask did browser load this file or not? 
  },
  // like loader more more about sum of input or outputs
  plugins: [
    // now we optimize webpack
    new webpack.optimize.CommonsChunkPlugin({
      // check if duplicates and if they are then they will be only in one file vendor/bundle
      // THIS WEILL DECREASE size of bundle.js
      // manifest => to better tell browser if file actually got changed
      name : ['vendor','manifest']
    }),
    // to not manually put files in the html we can add plugin that will add all scriptags in html
    //  by using HtmlWWebPack Plugin
    new HtmlWebpackPlugin({
      // reference to html document that we have src/
      template: 'src/index.html'
    }),
    // deployment
    new webpack.DefinePlugin({
      // if path is `production` it will go faster without checking for errors
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
  // rimraf -> will clear build folder every time when we update webpack ('`Because we have too many hashed.js`')
};

// webpack-dev-server is development server that helps to reload the application 