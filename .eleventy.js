module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( 'css' );
	eleventyConfig.addPassthroughCopy( 'fonts' );
	eleventyConfig.addPassthroughCopy( 'img' );
	eleventyConfig.addPassthroughCopy( 'js' );

	eleventyConfig.addPassthroughCopy( 'robots.txt' );
	eleventyConfig.addPassthroughCopy( 'favicon.ico' );
	eleventyConfig.addPassthroughCopy( '_redirects' );

// error handler
	// eleventyConfig.addPlugin( ErrorOverlay );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		...eleventyConfig.browserSyncConfig
		,ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};
