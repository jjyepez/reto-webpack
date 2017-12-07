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
			},
			{ // -- declaro el loader y sus opciones
				test: /\.(png|jpg|gif|ttf|eot|woff)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000 // --- 100 Kb
					}
				} 
			},
			{
				test: /\.json$/,
				use:{
					loader: 'json-loader'
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("./css/estilos.css"), // --- ojo .css
	]
}