import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import useScrollToTop from '../hooks/useScrollToTop';

import Image from '../components/shared/Image';
import Section from '../components/shared/Section';
import Seo from '../components/Layout/Seo';

import './about.css';

const imageQuery = graphql`
	query AboutImgs {
		vsainte: file(relativePath: { eq: "vladimir-sainte.jpg" }) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
	}
`;

const About = ({ location }) => {
	useScrollToTop();
	const booksData = useStaticQuery(imageQuery);
	return (
		<React.Fragment>
			<Seo title='About' />
			<Section>
				<div className='about'>
					<h1 className='page-title'>About</h1>
					<div className='about__content'>
						<div className='about__left'>
							<Image
								image={booksData.vsainte.childImageSharp.gatsbyImageData}
								boxShadow='default'
								className='about__img'
								alt='Vladimir Sainte'
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
								<h2>Professional Bio</h2>
								<div>
									Vladimir Sainte, LCSW has 15+ years of experience as a licensed clinical social worker and has made significant contributions to the Kansas City community through his work as a children's book author and former child therapist. He currently serves as a Senior Project Manager at University Health Behavioral Health, leveraging his expertise to guide organizational change and strive for employee wellness. In 2022, he won Best Local Author by The Pitch for his ongoing work to educate young children about their emotional literacy. Sainte holds a Bachelor of Arts in Sociology from the University of Missouri-Kansas City, where he also obtained a Master of Social Work. Throughout his years in the field, Sainte has made an invaluable impact with children and families. He is inspired by his two children, the constant heroes in his life.
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
									adults, ranging from ages 2&ndash;23. One of
									the best things that I have learned
									throughout my career is the importance of
									connection. Forming therapeutic
									relationships with my clients and their
									providers has been very rewarding.
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
						</div>
					</div>
				</div>
			</Section>
		</React.Fragment>
	);
};

export default About;
