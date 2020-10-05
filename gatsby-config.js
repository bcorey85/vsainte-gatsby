module.exports = {
	siteMetadata: {
		title: `Vladimir Sainte, LCSW| Author of the Just Like a Hero series`,
		description: `Website of Vladimir Sainte, LCSW. Author and illustrator of children's books about finding inner strength and becoming a superhero.`,
		author: `Vladimir Sainte`
	},
	plugins: [
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-netlify`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					// gatsby-remark-relative-images must
					// go before gatsby-remark-images
					{
						resolve: `gatsby-remark-relative-images`
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 536
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 85
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			//Has to stay at top for MarkdownRemark to identify image strings
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static/assets`,
				name: `static-assets`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: `images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/blog`,
				name: `blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/event`,
				name: `event`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/event-photo`,
				name: `event-photo`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/testimonial`,
				name: `testimonial`
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
					`solway\:500` // you can also specify font weights and styles
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
				id: 'GTM-KMLZ9ZD',

				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				// Defaults to null
				defaultDataLayer: { platform: 'gatsby' }
			}
		}
	]
};
