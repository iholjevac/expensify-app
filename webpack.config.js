const path = require('path')
const { dirname } = require('path')
// entry -> output

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), //path.resolve(__dirname, 'public') - we can do it also like this,
        filename: 'bundle.js'
    },
    module: {
        rules:[{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                },{
                test:/\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'] 
            }]
    },
    devtool: 'cheap-module-eval-source-map',//'eval-cheap-module-source-map'
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}

//loader