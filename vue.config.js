module.exports = {
	publicPath: './',
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/sass/prepends.scss";`,
			},
		},
	},
};