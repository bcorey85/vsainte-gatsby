module.exports = {
	siteMetadata: {
		title: `Vladimir Sainte, LCSW| Author of the Just Like a Hero series`,
		description: `Website of Vladimir Sainte, LCSW. Author and illustrator of children's books about finding inner strength and becoming a superhero.`,
		author: `Vladimir Sainte`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 85
			}
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/components/Layout.js`)
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Vladimir Sainte, LCSW| Author of the Just Like a Hero series`,
				short_name: `Vladimir Sainte`,
				start_url: `/`,
				background_color: '#b3e6e1',
				theme_color: '#b3e6e1',
				icon: `src/images/icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`poppins\:400,400i,500`,
					`aleo\:700,700i` // you can also specify font weights and styles
				],
				display: 'swap'
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: 'UA-138324334-1'
			}
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'YGTM-KMLZ9ZD',

				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				// Defaults to null
				defaultDataLayer: { platform: 'gatsby' }
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
