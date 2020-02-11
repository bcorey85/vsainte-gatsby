import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import useScrollToTop from '../hooks/useScrollToTop';

import Section from '../components/shared/Section';
import Carousel from '../components/Carousel';
import SEO from '../components/Seo';
import EventListing from '../components/EventListing';

import './speaking.css';

const Speaking = ({ location }) => {
	useScrollToTop();
	const eventsData = useStaticQuery(eventsQuery);
	const eventsArray = eventsData.events.edges;
	const eventPhotoArray = eventsData.eventPhotos.edges;

	return (
		<React.Fragment>
			<SEO title='Speaking' />
			<Section>
				<div className='speaking'>
					<h1 className='page-title'>Speaking</h1>
					<div className='speaking__content'>
						<div>
							<h2>Overview</h2>
							My author visits help kids get excited about reading
							and learning self-regulation skills. By emphasizing
							their worth, strengthening their resiliency, and
							valuing their individuality, these interactive
							sessions provide a fun and productive way for
							children to learn and grow. Schedule a visit at your
							school to start their heroic journey!
						</div>
						<div>
							<iframe
								title='Vladimir Sainte Fox 4 KC interview'
								frameBorder='0'
								allowFullScreen
								src='//cdn2.trb.tv/iframe.html?ec=NqZGhuaTE6Gv__BcR4eua29LJCvZxAbP&pbid=41a7fde962484147af148038b175431a&pcode=o3ZXA6AW_ODSH73PHaEhBxcqUpwq'
								className='lazyload'
							/>
						</div>
						<div>
							<h2>Features</h2>
							During each presentation, I will read my book and
							provide follow-up questions along with live
							demonstrations of coping skills to use in moments of
							emotional distress. My primary target audience is
							children from K-5th grade, but I will tailor each
							presentation to meet the specific needs of your site
							upon request!
						</div>
						<div>
							<h2>Events</h2>
							<ul className='event-list'>
								{eventsArray.map(event => {
									return (
										<EventListing
											event={event.node.frontmatter.title}
											date={event.node.frontmatter.date}
											location={
												event.node.frontmatter.location
											}
											key={event.node.id}
										/>
									);
								})}
							</ul>
						</div>
					</div>
					<div className='event-photos'>
						<Carousel
							title='Event Photos'
							icon='camera'
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
		events: allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "event" } } }
			limit: 4
			sort: { fields: frontmatter___date, order: DESC }
		) {
			edges {
				node {
					id
					frontmatter {
						date(formatString: "MM/DD/YYYY")
						location
						title
					}
				}
			}
		}
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
								fluid(maxWidth: 630) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;
