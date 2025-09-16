import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import useScrollToTop from '../hooks/useScrollToTop';

import Button from '../components/shared/Button';
import Image from '../components/shared/Image';
import Section from '../components/shared/Section';
import Carousel from '../components/shared/Carousel';
import Card from '../components/Landing/Card';
import SEO from '../components/Layout/Seo';
import Divider from '../components/shared/Divider';

import './index.css';

const Home = () => {
	useScrollToTop();
	const indexData = useStaticQuery(indexQuery);

	return (
		<React.Fragment>
			<SEO title='Home' />
			<Section color='white' margin='0 0 2vw 0' className='fullvh' wide>
				<div className='hero-section'>
					<div className='hero-section__left'>
						<h1 className='hero-section__title'>About Vladimir</h1>
						<p className='hero-section__cta-text'>
							I've been working as a licensed clinical social worker in the Kansas City area for over 15+ years. In 2022, I won Best Local Author by The Pitch magazine for his ongoing work to educate young children about emotional literacy. My mission is to create inclusive literature to increase resiliency and a sense of worth in children.
						</p>
						<div className='hero-section__btn'>
							<Button to='/about' margin='none'>
								Learn More
							</Button>
						</div>
					</div>
					<div className='hero-section__right'>
						<Image
							fluid={indexData.headshot.childImageSharp.fluid}
							boxShadow='default'
							className='hero-section__img'
							alt='Vladimir Sainte'
						/>
					</div>
				</div>
			</Section>
			<Divider angle />
			<Section color='lightGray' paper angle='top' padding='1.5vw 0' wide>		
				<div className='testimonials'>
					<Carousel
						title='What Others Say'
						data={indexData.testimonials.nodes}
						dataType='text'
					/>
				</div>
			</Section>
			<Divider />
			<Section angle='bottom'>
				<div className='details-section'>
					<div className='igvideo-wrapper'>
						<iframe
							src='https://www.instagram.com/p/CIjJ9j2gwDT/embed'
							frameBorder='0'
							allowFullScreen
							scrolling='no'
							allowtransparency='true'
							title='Instagram video'
						/>
					</div>
				</div>
			</Section>
			<Divider angle />
			<Section
				color='teal'
				className='books-teal'
				angle='both'
				padding='1.5vw 0 0 0'>
				<div className='books-section'>
					<Card
						href='https://www.amazon.com/Making-Mistakes-Just-Like-Hero/dp/1942005571/ref=sr_1_1?dchild=1&keywords=making+mistakes+vladimir+sainte&qid=1602393034&sr=8-1'
						imgSrcFluid={indexData.mmCover.childImageSharp.fluid}
						imgAlt={'Waves of Hurt'}
						btnColor={'default'}
						btnText={'Buy Now'}
						boxShadow={'default'}
					/>
					<Card
						href='https://www.amazon.com/Making-Mistakes-Just-Like-Hero/dp/1942005571/ref=sr_1_1?dchild=1&keywords=making+mistakes+vladimir+sainte&qid=1602393034&sr=8-1'
						imgSrcFluid={indexData.mmCover.childImageSharp.fluid}
						imgAlt={'Making Mistakes'}
						btnColor={'default'}
						btnText={'Buy Now'}
						boxShadow={'default'}
					/>
					<Card
						href='https://www.amazon.com/Will-Okay-Just-Like-Hero/dp/1942005520/ref=sr_1_1?crid=2SQ0E2D0Z20WN&keywords=it+will+be+okay+vladimir+sainte&qid=1570911125&sprefix=it+will+be+okay+vladimi%2Caps%2C153&sr=8-1'
						imgSrcFluid={indexData.iwboCover.childImageSharp.fluid}
						imgAlt={'It Will Be Okay'}
						btnColor={'default'}
						btnText={'Buy Now'}
						boxShadow={'default'}
					/>
					<Card
						href='https://www.amazon.com/Just-Like-Hero-Vladimir-Sainte/dp/194200544X/ref=sr_1_1?ie=UTF8&qid=1549147023&sr=8-1&keywords=just+like+a+hero'
						imgSrcFluid={indexData.jlahCover.childImageSharp.fluid}
						imgAlt={'Just Like A Hero'}
						btnColor={'default'}
						btnText={'Buy Now'}
						boxShadow={'default'}
					/>
				</div>
			</Section>
			<Divider angle />
			<Section color='lightGray' paper angle='top'>
				<div className='speaking-section'>
					<div className='speaking-section__left'>
						<h2>Speaking</h2>
						<div className='speaking-section__content'>
							I regularly give presentations for children of all
							ages. These events provide a chance to learn and
							practice positive coping skills, while also helping
							kids discover their own personal superhero.
						</div>
						<div className='speaking-section__btn'>
							<Button to='/speaking' margin='none'>
								More Info
							</Button>
						</div>
					</div>
					<div className='speaking-section__right'>
						<iframe
							title='Vladimir Sainte KCPT Kids'
							className='speaking-section__video lazyload'
							src='https://www.youtube.com/embed/FW5XFBPEh9Q?si=TXsuZK2szjd800i3'
							frameBorder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</div>
			</Section>
		</React.Fragment>
	);
};

export default Home;

const indexQuery = graphql`
	query IndexData {
		iwboCover: file(
			relativePath: { eq: "it-will-be-okay-book-cover.jpg" }
		) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		jlahCover: file(
			relativePath: { eq: "just-like-a-hero-book-cover.jpg" }
		) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		mmHero: file(relativePath: { eq: "mm-cta.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		mmCover: file(relativePath: { eq: "mm-cover.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		mminnerstrength: file(
			relativePath: { eq: "mm-inner-strength-organizer.jpg" }
		) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		mmzaidrules: file(relativePath: { eq: "mm-zaid-rules.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		mmzaidspeed: file(relativePath: { eq: "mm-zaid-speed.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		mmzaidsad: file(relativePath: { eq: "mm-zaid-sad.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		headshot: file(relativePath: { eq: "vladimir-sainte.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		testimonials: allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "testimonial" } } }
		) {
			nodes {
				frontmatter {
					title1
					title2
					author
				}
				html
				id
			}
		}
	}
`;
