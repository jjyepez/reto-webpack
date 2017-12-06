const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname,'src/js/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',
		publicPath: './dist/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader','style-loader']
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader","less-loader"]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("./css/estilos.css"), // --- ojo .css
	]
}