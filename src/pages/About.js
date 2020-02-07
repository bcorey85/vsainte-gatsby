import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import useScrollToTop from '../hooks/useScrollToTop';

import Image from '../components/shared/Image';
import Section from '../components/shared/Section';
import SEO from '../components/Seo';

import './About.css';

const About = ({ location }) => {
	useScrollToTop();
	const booksData = useStaticQuery(imageQuery);
	return (
		<React.Fragment>
			<SEO title='About' />
			<Section>
				<div className='about'>
					<h1 className='page-title'>About</h1>
					<div className='about__content'>
						<div className='about__left'>
							<Image
								fluid={booksData.teamCVS.childImageSharp.fluid}
								boxShadow='default'
								className='about__img'
							/>
							<Image
								fluid={booksData.young.childImageSharp.fluid}
								boxShadow='default'
								className='about__img'
							/>
						</div>
						<div className='about__right'>
							<div className='about__p'>
								<h2>Mission Statement</h2>
								<div>
									Creating inclusive literature to increase
									resiliency and a sense of worth in children.
								</div>
							</div>
							<div className='about__p'>
								<h2>Background</h2>
								<div>
									What is there to be said about me? Well,
									let’s find out! I am Haitian American,
									father of two beautiful biracial children,
									and a husband to the most remarkable woman I
									have ever met. I was born and partly raised
									in Queens, New York. I have spent most of my
									career working with children and young
									adults, ranging from ages 2-23. One of the
									best things that I have learned throughout
									my career is the importance of connection.
									Forming therapeutic relationships with my
									clients and their providers has been very
									rewarding.
								</div>
							</div>
							<div className='about__p'>
								<h2>Passion For Art</h2>
								<div>
									From as early as I can remember, art has
									been a medium, a voice to express everything
									that was going on in my life. My passion for
									art not only exists in my heart but also
									resides in my soul. I fill my artistic cup
									by focusing on beauty surrounds me. I’m
									driven by the need to create stories that
									are relatable and informative to the reader.
								</div>
							</div>
							<div className='about__p'>
								<h2>Professional Bio</h2>
								<div>
									With more than ten years' experience as a
									therapist, Vladimir Sainte, LCSW has made an
									invaluable impact on the Kansas City
									community through his work as a counselor
									and crisis clinician. Sainte is committed to
									providing supportive counseling, not just
									with children, but through a partnership
									with their families and the broader
									community members for a holistic impact on
									the child's development. Sainte graduated
									with a Bachelor of Arts in Sociology and a
									Master of Social Work from the University of
									Missouri-Kansas City.
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</React.Fragment>
	);
};

export default About;

const imageQuery = graphql`
	query AboutImgs {
		teamCVS: file(relativePath: { eq: "vladimir-sainte-teamcvs.jpg" }) {
			childImageSharp {
				fluid(webpQuality: 100, jpegQuality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		young: file(relativePath: { eq: "vladimir-sainte-young.jpg" }) {
			childImageSharp {
				fluid(webpQuality: 100, jpegQuality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
