module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/',
        port: 3000,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel'],
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extenstions: ['', '.js', '.jsx', '.css']
    }
}
