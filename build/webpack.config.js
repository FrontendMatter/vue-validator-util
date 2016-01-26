var path = require('path')
var WebpackConfig = require('themekit-webpack-config')
var config = new WebpackConfig()
	.withStandaloneEntry('vue-validator-util')
	.withLibrary('VueValidatorUtil')
	.withAlias({
		'vue-validator-util': path.resolve(__dirname, '..')
	})

module.exports = config