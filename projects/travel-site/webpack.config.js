const path = require('path')
const postCSSPluing = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry:'./app/assets/scrips/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve('app')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {plugins: postCSSPluing}}]
            }
        ]
    }
}