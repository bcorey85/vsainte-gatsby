import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import useScrollToTop from '../hooks/useScrollToTop';

import Carousel from '../components/shared/Carousel';
import Section from '../components/shared/Section';
import Seo from '../components/Layout/Seo';

import './speaking.css';

const Speaking = () => {
	useScrollToTop();
	const eventsData = useStaticQuery(eventsQuery);
	const eventPhotoArray = eventsData.eventPhotos.edges;

	return (
		<React.Fragment>
			<Seo title='Speaking' />
			<Section>
				<div className='speaking'>
					<h1 className='page-title'>Speaking</h1>
					<div className='speaking__content'>
						<h2>Author Visits</h2>
						<p>
							My author visits help kids get excited about reading
							and learning self-regulation skills. By emphasizing
							their worth, strengthening their resiliency, and
							valuing their individuality, these interactive
							sessions provide a fun and productive way for
							children to learn and grow. Schedule a visit at your
							school to start their heroic journey!
						</p>
						<p>
							During each presentation, I will read my book and
							provide follow-up questions along with live
							demonstrations of coping skills to use in moments of
							emotional distress. My primary target audience is
							children from K-5th grade, but I will tailor each
							presentation to meet the specific needs of your site
							upon request!
						</p>
					</div>
					<div className='event-photos'>
						<Carousel
							title='Check Out The Fun!'
							data={eventPhotoArray}
							dataType='photos'
						/>
					</div>
					<div className='pricing'>
						For more information and pricing, please email{' '}
						<a
							href='mailto:vladimirsainte@gmail.com'
							className='link'>
							vladimirsainte@gmail.com
						</a>, or shoot me a{' '}
						<Link to='/contact' className='link'>
							comment
						</Link>!
					</div>
				</div>
			</Section>
		</React.Fragment>
	);
};

export default Speaking;

const eventsQuery = graphql`
	query EventsQuery {
		eventPhotos: allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "event-photo" } } }
		) {
			edges {
				node {
					id
					frontmatter {
						image_desc
						image {
							childImageSharp {
								gatsbyImageData(
									width: 630
									placeholder: BLURRED
									formats: [AUTO, WEBP, AVIF]
									quality: 90
								)
							}
						}
					}
				}
			}
		}
	}
`;
