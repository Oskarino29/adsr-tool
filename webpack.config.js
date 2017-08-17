module.exports = {
  entry: {
    app: "./js/app.js",
    html: "./index.html",
  },

  context: __dirname + "/app",

  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.s(a|c)ss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
