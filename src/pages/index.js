import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactHtmlParser from 'react-html-parser';

import useScrollToTop from '../hooks/useScrollToTop';

import Button from '../components/shared/Button';
import Image from '../components/shared/Image';
import Section from '../components/shared/Section';
import Carousel from '../components/shared/Carousel';
import Card from '../components/Landing/Card';
import Thumbnail from '../components/Landing/Thumbnail';
import SEO from '../components/Layout/Seo';
import Divider from '../components/shared/Divider';

import heroImage from '../images/mm-cta.jpg';

import './index.css';

const Home = () => {
	useScrollToTop();
	const indexData = useStaticQuery(indexQuery);

	const renderBlogTitles = () => {
		const titles = indexData.blogPostTitles.nodes.map((post, i) => (
			<li key={post.id}>
				<Link to={post.fields.path} className='link'>
					{ReactHtmlParser(post.frontmatter.title)}
				</Link>
			</li>
		));
		return titles;
	};

	return (
		<React.Fragment>
			<SEO title='Home' />
			<Section color='white' margin='0 0 2vw 0' className='fullvh' wide>
				<div className='hero-section'>
					<div className='hero-section__left'>
						<div>
							<h5>new release</h5>
							<h1>Making Mistakes</h1>
						</div>

						<p className='hero-section__cta-text'>
							Join Zaid on his superhero adventure as he learns to
							calm his body, focus his attention powers, and
							overcome his mistakes in this superhero book for
							kids.
						</p>
						<Button
							href='https://www.amazon.com/Making-Mistakes-Just-Like-Hero/dp/1942005571/ref=sr_1_1?dchild=1&keywords=making+mistakes+vladimir+sainte&qid=1602393034&sr=8-1'
							color='cta'
							margin='none'>
							Buy Now
						</Button>
					</div>
					<div className='hero-section__right'>
						<img
							src={heroImage}
							alt='It Will Be Okay book cover'
							className='hero-section__img'
						/>
					</div>
				</div>
			</Section>
			<Divider angle />
			<Section color='lightGray' paper angle='top' padding='1.5vw 0' wide>
				<div className='details-section'>
					<div className='features'>
						<div className='features__item'>
							<div className='features__item-text'>
								<div>
									<h2>Meet Zaid</h2>
									<p>
										Zaid is a young boy who struggles with
										slowing down and makes many mistakes in
										the process. Other kids bully Zaid at
										school because he is different.
									</p>
								</div>
							</div>
							<div className='features__item-image'>
								<Image
									fluid={
										indexData.mmzaidspeed.childImageSharp
											.fluid
									}
									alt='Image of Zaid running fast from Making Mistakes book'
									boxShadow='default'
									className='features__img'
								/>
							</div>
						</div>
						<div className='features__item features__item--reverse'>
							<div className='features__item-text'>
								<div>
									<h2>His Speed</h2>
									<p>
										Zaid has a hard time slowing down, and
										often forgets to follow the rules at
										school. Can he actually learn from his
										mistakes?
									</p>
								</div>
							</div>
							<div className='features__item-image'>
								<Image
									fluid={
										indexData.mmzaidrules.childImageSharp
											.fluid
									}
									alt='Image of Zaid getting bullied and running away from Making Mistakes book'
									boxShadow='default'
									className='features__img'
								/>
							</div>
						</div>
						<div className='features__item'>
							<div className='features__item-text'>
								<div>
									<h2>The Inner Strength Organizer</h2>
									<p>
										After receiving help from Dr. Grey, Zaid
										is given the Inner Strength organizer!
										With the help of the ISO watch, Zaid is
										able to master his power, and feel
										confident in the process!
									</p>
								</div>
							</div>
							<div className='features__item-image'>
								<Image
									fluid={
										indexData.mminnerstrength
											.childImageSharp.fluid
									}
									alt='Image of the Inner Strength organizer from Making Mistakes book'
									boxShadow='default'
									className='features__img'
								/>
							</div>
						</div>
						<div className='features__item features__item--reverse'>
							<div className='features__item-text'>
								<div>
									<h2>
										Help Your Child<br /> Manage Big
										Feelings
									</h2>

									<p>
										In 12 years of experience as a child and
										family therapist, I have learned how to
										write fun children's books that boost
										self-regulation skills and teach new
										ways of managing emotions.
									</p>
									<p>
										<em>Making Mistakes</em> is a great tool
										for helping to support the emotions of
										children in a way that's meaningful to
										them.
									</p>
								</div>
							</div>
							<div className='features__item-image'>
								<Image
									fluid={
										indexData.mmzaidsad.childImageSharp
											.fluid
									}
									alt='Image of Zaid getting in trouble at school from Making Mistakes book'
									boxShadow='default'
									className='features__img'
								/>
							</div>
						</div>
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
						href='https://www.amazon.com/Making-Mistakes-Just-Like-Hero/dp/1942005571/ref=sr_1_1?dchild=1&keywords=making+mistakes+vladimir+sainte&qid=1602393034&sr=8-1'
						imgSrcFluid={indexData.mmCover.childImageSharp.fluid}
						imgAlt={'Making Mistakes'}
						btnColor={'cta'}
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
							src='https://www.youtube-nocookie.com/embed/FW5XFBPEh9Q'
							frameBorder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</div>
			</Section>
			<Divider />
			<Section color='var(--white)'>
				<div className='about-section'>
					<div className='about-section__left'>
						<div className='about-section__header'>
							<h3>About Vladimir</h3>
							<Thumbnail
								fluid={indexData.headshot.childImageSharp.fluid}
								alt='Vladimir Sainte'
							/>
						</div>

						<div className='about-section__content'>
							I've been working as a licensed clinical social
							worker in the Kansas City area for the last ten
							years. My mission is to create inclusive literature
							to increase resiliency and a sense of worth in
							children.
						</div>
						<div className='about-section__link'>
							<Link to='/about' className='link-caps'>
								View About
							</Link>
						</div>
					</div>
					<div className='about-section__right'>
						<div className='about-section__header'>
							<h3>Recent Blog Posts</h3>
							<FontAwesomeIcon
								icon={faPencilAlt}
								className='about-section__header-icon'
							/>
						</div>

						<ul className='about-section__content'>
							{renderBlogTitles()}
						</ul>
						<div className='about-section__link'>
							<Link to='/blog' className='link-caps'>
								Read Blog
							</Link>
						</div>
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
		headshot: file(relativePath: { eq: "vladimir-sainte-headshot.jpg" }) {
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
		blogPostTitles: allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "blog-post" } } }
			limit: 4
			sort: { fields: frontmatter___date, order: DESC }
		) {
			nodes {
				frontmatter {
					title
				}
				id
				fields {
					path
				}
			}
		}
	}
`;
