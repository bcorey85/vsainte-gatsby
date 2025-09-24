import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import useScrollToTop from '../hooks/useScrollToTop';

import Button from '../components/shared/Button';
import Card from '../components/Landing/Card';
import Carousel from '../components/shared/Carousel';
import Divider from '../components/shared/Divider';
import Image from '../components/shared/Image';
import Section from '../components/shared/Section';
import Seo from '../components/Layout/Seo';

import './index.css';

const Home = () => {
	useScrollToTop();
	const indexData = useStaticQuery(indexQuery);

	return (
		<React.Fragment>
			<Seo title='Home' />
			<Section color='white' margin='0 0 2vw 0' className='fullvh' wide>
				<div className='hero-section'>
					<div className='hero-section__left'>
						<h1 className='hero-section__title'>About Vladimir</h1>
						<p className='hero-section__cta-text'>
							I've been working as a licensed clinical social worker in the Kansas City area for over 15 years. In 2022, I won Best Local Author by <em>The Pitch</em> for my ongoing work to educate young children about emotional literacy. My mission is to create inclusive literature to increase resiliency and a sense of worth in children.
						</p>
						<div className='hero-section__btn'>
							<Button to='/about' margin='none'>
								Learn More
							</Button>
						</div>
					</div>
					<div className='hero-section__right'>
						<Image
							image={indexData.headshot.childImageSharp.gatsbyImageData}
							boxShadow='default'
							className='hero-section__img'
							alt='Vladimir Sainte'
						/>
					</div>
				</div>
			</Section>
			<Divider angle />
			<Section color='lightGray' paper angle='top' padding='1.5vw 0' wide>	
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
			<Divider />
			<Section angle='bottom'>
				<div className='testimonials'>
					<Carousel
						title='What Others Say'
						data={indexData.testimonials.nodes}
						dataType='text'
					/>
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
						href='https://www.amazon.com/Waves-Hurt-Vladimir-Sainte/dp/B0BY3RJJK1/?_encoding=UTF8&pd_rd_w=Kc5KC&content-id=amzn1.sym.a7785aa2-ac28-4769-b3eb-cff7b9738627&pf_rd_p=a7785aa2-ac28-4769-b3eb-cff7b9738627&pf_rd_r=139-4296644-6411434&pd_rd_wg=bXwvx&pd_rd_r=d9d97eb5-fcb4-461b-a73a-2a8caa1f0994&ref_=aufs_ap_sc_dsk'
						imgSrc={indexData.wohCover.childImageSharp.gatsbyImageData}
						imgAlt={'Waves of Hurt'}
						btnColor={'default'}
						btnText={'Buy Now'}
						boxShadow={'default'}
					/>
					<Card
						href='https://www.amazon.com/Making-Mistakes-Just-Like-Hero/dp/1942005571/ref=sr_1_1?dchild=1&keywords=making+mistakes+vladimir+sainte&qid=1602393034&sr=8-1'
						imgSrc={indexData.mmCover.childImageSharp.gatsbyImageData}
						imgAlt={'Making Mistakes'}
						btnColor={'default'}
						btnText={'Buy Now'}
						boxShadow={'default'}
					/>
					<Card
						href='https://www.amazon.com/Will-Okay-Just-Like-Hero/dp/1942005520/ref=sr_1_1?crid=2SQ0E2D0Z20WN&keywords=it+will+be+okay+vladimir+sainte&qid=1570911125&sprefix=it+will+be+okay+vladimi%2Caps%2C153&sr=8-1'
						imgSrc={indexData.iwboCover.childImageSharp.gatsbyImageData}
						imgAlt={'It Will Be Okay'}
						btnColor={'default'}
						btnText={'Buy Now'}
						boxShadow={'default'}
					/>
					<Card
						href='https://www.amazon.com/Just-Like-Hero-Vladimir-Sainte/dp/194200544X/ref=sr_1_1?ie=UTF8&qid=1549147023&sr=8-1&keywords=just+like+a+hero'
						imgSrc={indexData.jlahCover.childImageSharp.gatsbyImageData}
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
              src="https://www.youtube.com/embed/FW5XFBPEh9Q?si=quBCP24YXW13dey1" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
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
		wohCover: file(
			relativePath: { eq: "2025/waves-of-hurt.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		iwboCover: file(
			relativePath: { eq: "2025/it-will-be-okay.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		jlahCover: file(
			relativePath: { eq: "2025/just-like-a-hero.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		mmCover: file(relativePath: { eq: "2025/making-mistakes.jpg" }) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		headshot: file(relativePath: { eq: "vladimir-sainte.jpg" }) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
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
