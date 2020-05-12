import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactHtmlParser from 'react-html-parser';

import useScrollToTop from '../hooks/useScrollToTop';

import Button from '../components/shared/Button';
import Image from '../components/shared/Image';
import Section from '../components/shared/Section';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import Thumbnail from '../components/Thumbnail';
import SEO from '../components/Seo';
import Divider from '../components/shared/Divider';

import './index.css';

const Home = ({ location }) => {
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
			<Section color='white' margin='0 0 2vw 0' wide className='fullvh'>
				<div className='hero-section'>
					<div className='hero-section__left'>
						<div>
							<h5>new release</h5>
							<h1>It Will Be Okay</h1>
						</div>

						<p className='hero-section__cta-text'>
							Explore the superhero journey of Alma, in this
							children's book about overcoming bullying, anxiety,
							and fear.
						</p>
						<Button
							href='https://www.amazon.com/Will-Okay-Just-Like-Hero/dp/1942005520/ref=sr_1_1?crid=2SQ0E2D0Z20WN&keywords=it+will+be+okay+vladimir+sainte&qid=1570911125&sprefix=it+will+be+okay+vladimi%2Caps%2C153&sr=8-1'
							color='cta'
							margin='none'>
							Buy Now
						</Button>
					</div>
					<div className='hero-section__right'>
						<Image
							fluid={indexData.cta.childImageSharp.fluid}
							alt='It Will Be Okay book cover'
							className='hero-section__img'
						/>
					</div>
				</div>
			</Section>
			<Divider angle />
			<Section color='lightGray' paper angle='both' padding='1.5vw 0'>
				<div className='details-section'>
					<div className='features'>
						<div className='features__item'>
							<div className='features__item-text'>
								<h2>Meet Alma: The Hero</h2>

								<p>
									Alma is a young girl who struggles with many
									anxieties and fears. Other kids bully Alma
									at school and make her feel sad most of the
									time.
								</p>
							</div>
							<div className='features__item-image'>
								<Image
									fluid={
										indexData.iwboblackphoto.childImageSharp
											.fluid
									}
									alt='Alma sad in corner'
									boxShadow='default'
									className='features__img'
								/>
							</div>
						</div>
						<div className='features__item features__item--reverse'>
							<div className='features__item-text'>
								<h2>Limbo: Her Nemesis</h2>
								<p>
									Limbo is a mean fear monster that feeds on
									Alma's sadness and makes her feel miserable.
									Can she find the courage to face him?
								</p>
							</div>
							<div className='features__item-image'>
								<Image
									fluid={
										indexData.iwboredphoto.childImageSharp
											.fluid
									}
									alt='Limbo laughing'
									boxShadow='default'
									className='features__img'
								/>
							</div>
						</div>
						<div className='features__item'>
							<div className='features__item-text'>
								<h2>The Hope Shield: Her Strength</h2>
								<p>
									Soon, with some caring friends, Alma
									discovers the Hope Shield! This gives her
									the strength to beat Limbo once and for all!
								</p>
							</div>
							<div className='features__item-image'>
								<Image
									fluid={
										indexData.iwbopurplephoto
											.childImageSharp.fluid
									}
									alt='Alma hero'
									boxShadow='default'
									className='features__img'
								/>
							</div>
						</div>
					</div>
					<div className='benefits'>
						<div className='benefits__left'>
							<Image
								fluid={
									indexData.iwbobluephoto.childImageSharp
										.fluid
								}
								alt='Alma crying'
								boxShadow='default'
							/>
						</div>
						<div className='benefits__right'>
							<h2>Help children manage big feelings</h2>
							<div className='benefits__p'>
								<p>
									In 10 years of experience as a child and
									family therapist, I have learned how write
									fun children's books that boost
									self-regulation skills and teach new ways of
									managing emotions.
								</p>
								<p>
									<em>It Will Be Okay</em> is a great tool for
									helping to support the emotions of children
									in a way that's meaningful to them.
								</p>
							</div>
						</div>
					</div>
					<div className='testimonials'>
						<Carousel
							title='What Others Say'
							data={indexData.testimonials.nodes}
							dataType='text'
						/>
					</div>
				</div>
			</Section>
			<Divider angle />
			<Section color='teal' className='books-teal' angle='both'>
				<div className='books-section'>
					<Card
						href='https://www.amazon.com/Will-Okay-Just-Like-Hero/dp/1942005520/ref=sr_1_1?crid=2SQ0E2D0Z20WN&keywords=it+will+be+okay+vladimir+sainte&qid=1570911125&sprefix=it+will+be+okay+vladimi%2Caps%2C153&sr=8-1'
						imgSrcFluid={indexData.iwboCover.childImageSharp.fluid}
						imgAlt={'It Will Be Okay'}
						btnColor={'cta'}
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
			<Section color='lightGray' paper angle='top' padding='1.5vw 0 0 0'>
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
		cta: file(
			relativePath: { eq: "it-will-be-okay-book-cta-section.jpg" }
		) {
			childImageSharp {
				fluid(traceSVG: { color: "rgb(179, 230, 225)", threshold: 0 }) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
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
		iwboblackphoto: file(
			relativePath: { eq: "it-will-be-okay-book-img1.jpg" }
		) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		iwboredphoto: file(
			relativePath: { eq: "it-will-be-okay-book-img2.jpg" }
		) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		iwbopurplephoto: file(
			relativePath: { eq: "it-will-be-okay-book-img3.jpg" }
		) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		iwbobluephoto: file(
			relativePath: { eq: "it-will-be-okay-book-img4.jpg" }
		) {
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
