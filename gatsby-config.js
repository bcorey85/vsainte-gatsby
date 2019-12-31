module.exports = {
	siteMetadata: {
		title: `Vladimir Sainte, LCSW| Author of the Just Like a Hero series`,
		description: `Website of Vladimir Sainte, LCSW. Author and illustrator of children's books about discovering their own superhero.`,
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
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/components/layout.js`)
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
					`poppins\:400,400i,500,600,600i` // you can also specify font weights and styles
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
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
