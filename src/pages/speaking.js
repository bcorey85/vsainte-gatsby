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
								scrolling='no'
								frameborder='0'
								allowfullscreen
								webkitallowfullscreen
								mozallowfullscreen
								allow='autoplay; fullscreen'
								src='https://w3.cdn.anvato.net/player/prod/v3/anvload.html?key=eyJtIjoiTElOIiwidiI6IjUxMDY0MTEiLCJhbnZhY2siOiI3MFgzNVFiVmpnb3ZwdG1WRDBId1pJMHc5bE5RazJSMSIsInNoYXJlTGluayI6Imh0dHBzOi8vZm94NGtjLmNvbS9uZXdzL2xvY2FsLXRoZXJhcGlzdC1wZW5zLWNoaWxkcmVucy1ib29rcy10by1naXZlLWFmcmljYW4tYW1lcmljYW4ta2lkcy1jb25maWRlbmNlLWhvcGUvIiwicGx1Z2lucyI6eyJjb21zY29yZSI6eyJjbGllbnRJZCI6IjYwMzY0MzkiLCJjMyI6ImZveDRrYy5jb20iLCJzY3JpcHQiOiIvL3czLmNkbi5hbnZhdG8ubmV0L3BsYXllci9wcm9kL3YzL3BsdWdpbnMvY29tc2NvcmUvY29tc2NvcmVwbHVnaW4ubWluLmpzIiwidXNlRGVyaXZlZE1ldGFkYXRhIjp0cnVlLCJtYXBwaW5nIjp7InZpZGVvIjp7ImMzIjoiZm94NGtjLmNvbSIsIm5zX3N0X3N0Ijoid2RhZiIsIm5zX3N0X3B1IjoiTmV4c3RhciIsIm5zX3N0X2dlIjoiTmV3cyJ9LCJhZCI6eyJjMyI6ImZveDRrYy5jb20iLCJuc19zdF9zdCI6IndkYWYiLCJuc19zdF9wdSI6Ik5leHN0YXIiLCJuc19zdF9nZSI6Ik5ld3MifX19LCJkZnAiOnsiY2xpZW50U2lkZSI6eyJhZFRhZ1VybCI6Imh0dHBzOi8vcHViYWRzLmcuZG91YmxlY2xpY2submV0L2dhbXBhZC9hZHM%2Fc3o9MXgxMDAwJml1PS81Njc4L254LndkYWYvbmV3cyZpbXBsPXMmZ2RmcF9yZXE9MSZlbnY9dnAmb3V0cHV0PXZtYXAmdW52aWV3ZWRfcG9zaXRpb25fc3RhcnQ9MSZ2aWQ9c2hvcnRfb25lY3VlJmNtc2lkPTEyMzQmdXJsPWh0dHBzOi8vZm94NGtjLmNvbS9uZXdzL2xvY2FsLXRoZXJhcGlzdC1wZW5zLWNoaWxkcmVucy1ib29rcy10by1naXZlLWFmcmljYW4tYW1lcmljYW4ta2lkcy1jb25maWRlbmNlLWhvcGUvJmNpdV9zenM9NzI4eDkwLDMwMHgyNTAmYWRfcnVsZT0xJmN1c3RfcGFyYW1zPXZpZCUzRDUxMDY0MTElMjZjbXNpZCUzRDEyNzgyMzMlMjZwaWQlM0QxMjc4MjMzJTI2dmlkY2F0JTNEL25ld3MlMjZib2JfY2slM0RbYm9iX2NrX3ZhbF0lMjZkZXNjcmlwdGlvbl91cmwlM0RodHRwczovL2ZveDRrYy5jb20vbmV3cy9sb2NhbC10aGVyYXBpc3QtcGVucy1jaGlsZHJlbnMtYm9va3MtdG8tZ2l2ZS1hZnJpY2FuLWFtZXJpY2FuLWtpZHMtY29uZmlkZW5jZS1ob3BlLyUyNmNvcnJlbGF0b3IlM0QxNTg4ODI2NzI3LjIzODYlMjZkX2NvZGUlM0RuYTAwMyJ9LCJsaWJyYXJ5UmVxdWVzdGVkIjp0cnVlfSwiZ29vZ2xlQW5hbHl0aWNzIjp7InRyYWNraW5nSWQiOiJVQS0yNDE0NTE3MS0xIiwiZXZlbnRzIjp7IkFEX1NUQVJURUQiOnsiYWxpYXMiOiJWaWRlby1BZCIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19TVEFSVEVEIjp7ImFsaWFzIjoiVmlkZW8tUGxheSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19GSVJTVF9RVUFSVElMRSI6eyJhbGlhcyI6IlZpZGVvLTI1JSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19NSURfUE9JTlQiOnsiYWxpYXMiOiJWaWRlby01MCUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVklERU9fVEhJUkRfUVVBUlRJTEUiOnsiYWxpYXMiOiJWaWRlby03NSUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVklERU9fQ09NUExFVEVEIjp7ImFsaWFzIjoiVmlkZW8tMTAwJSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJVU0VSX1BBVVNFIjp7ImFsaWFzIjoiUGF1c2UiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVVNFUl9SRVNVTUUiOnsiYWxpYXMiOiJSZXN1bWUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifX19LCJoZWFsdGhBbmFseXRpY3MiOnt9fSwiaHRtbDUiOnRydWUsInRva2VuIjoiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjJhV1FpT2lJMU1UQTJOREV4SWl3aWFYTnpJam9pTnpCWU16VlJZbFpxWjI5MmNIUnRWa1F3U0hkYVNUQjNPV3hPVVdzeVVqRWlMQ0psZUhBaU9qRTFPRGc0TXpBek1qZDkuRE1wcWx5NDJ0VWxYN2JzdVo5WHhBOXdIbHR1YjdWTlFfM1VJWm50RVh1ZyJ9'
								width='640'
								height='360'
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
