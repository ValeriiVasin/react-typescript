const webpack = require('webpack');

module.exports = {
  resolve: {
    // .js is required for react imports.
    // .tsx is for our app entry point.
    // .ts is optional, in case you will be importing any regular ts files.
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: [{
      // Set up ts-loader for .ts/.tsx files and exclude any imports from node_modules.
      test: /\.tsx?$/,
      loaders: ['react-hot-loader/webpack', 'ts-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  entry: {
    // Set index.tsx as application entry point.
    app: [
      'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './index.tsx'
    ]
  }
};
