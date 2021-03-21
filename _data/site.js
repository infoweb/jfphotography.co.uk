require( 'dotenv' ).config();

let baseURL = 'https://www.jfphotography.co.uk/';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		baseURL = 'http://localhost:8080/';
	break;

	case 'preview':
		baseURL = 'https://preview.jfphotography.co.uk/';
	break;

	default:
		baseURL = '/';
}

module.exports = {
	baseURL: baseURL
	,title: 'Jackie Frost Photography'
	,environment: process.env.ELEVENTY_ENV
};
