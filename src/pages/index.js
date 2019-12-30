import React from 'react';
import { Link } from 'gatsby';
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
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Divider from '../components/shared/Divider';

import './index.css';
import iwbocover from '../images/iwbocover.jpg';
import jlahcover from '../images/jlahcover.jpg';
import iwboctasection from '../images/iwbo-cta-section.jpg';
import iwboblackphoto from '../images/iwboblackphoto.jpg';
import iwboredphoto from '../images/iwboredphoto.jpg';
import iwbopurplephoto from '../images/iwbopurplephoto.jpg';
import iwbobluephoto from '../images/iwbobluephoto.jpg';
import headshot from '../images/vsainte-headshot.jpg';

import testimonialJSON from '../json/testimonials.json';
import blogJSON from '../json/blog-posts.json';

const Home = () => {
	useScrollToTop();

	const renderBlogTitles = () => {
		const currentYear = new Date().getFullYear();
		const titles = blogJSON.posts[currentYear]
			.slice(0, 4)
			.map((post, i) => (
				<li key={post.title}>
					<Link to='/blog' state={{ index: i }} className='link'>
						{ReactHtmlParser(post.title)}
					</Link>
				</li>
			));
		return titles;
	};

	return (
		<Layout>
			<SEO title='Home' />
			<Section color='white' margin='0 0 2vw 0'>
				<section className='hero-section'>
					<div className='hero-section__left'>
						<div>
							<h5>new release</h5>
							<h1>It Will Be Okay</h1>
						</div>

						<p className='hero-section__cta-text'>
							Join the story of{' '}
							<span className='cta-emphasis'>Alma</span>, as she
							learns to overcome her fears and bullying with the
							help of the mighty{' '}
							<span className='cta-emphasis'>Hope Shield</span>.
						</p>
						<Button
							href='https://www.amazon.com/Will-Okay-Just-Like-Hero/dp/1942005520/ref=sr_1_1?crid=2SQ0E2D0Z20WN&keywords=it+will+be+okay+vladimir+sainte&qid=1570911125&sprefix=it+will+be+okay+vladimi%2Caps%2C153&sr=8-1'
							color='cta'
							width='full'
							margin='none'>
							Buy Now
						</Button>
					</div>
					<div className='hero-section__right'>
						<Image
							src={iwboctasection}
							alt='It Will Be Okay book cover'
							className='hero-section__img'
						/>
					</div>
				</section>
			</Section>
			<Divider angle />
			<Section color='lightGray' paper angle='both' padding='1.5vw 0'>
				<section className='details-section'>
					<h2 className='details-section__heading'>Peak inside...</h2>
					<div className='features'>
						<div className='features__item'>
							<Image
								src={iwboblackphoto}
								alt='Alma sad in corner'
								boxShadow='default'
								className='features__img'
							/>
							<div>
								Alma is a young girl who struggles with many{' '}
								<span className='cta-emphasis'>
									anxieties
								</span>{' '}
								and <span className='cta-emphasis'>
									fears
								</span>...
							</div>
						</div>
						<div className='features__item'>
							<Image
								src={iwboredphoto}
								alt='Limbo laughing'
								boxShadow='default'
								className='features__img'
							/>
							<div>
								...a monster named{' '}
								<span className='cta-emphasis'>Limbo</span>{' '}
								controls Alma through her fears and makes her
								feel miserable...
							</div>
						</div>
						<div className='features__item'>
							<Image
								src={iwbopurplephoto}
								alt='Alma hero'
								boxShadow='default'
								className='features__img'
							/>
							<div>
								...but that all changes when Alma discovers the
								Hope Shield and unlocks the{' '}
								<span className='cta-emphasis'>
									superhero
								</span>{' '}
								inside of her!
							</div>
						</div>
					</div>
					<div className='benefits'>
						<div className='benefits__left'>
							<Image
								src={iwbobluephoto}
								alt='Alma crying'
								boxShadow='default'
							/>
						</div>
						<div className='benefits__right'>
							<div className='benefits__p1'>
								Do you have a child struggling with{' '}
								<span className='cta-emphasis'>
									{' '}
									bullying{' '}
								</span>{' '}
								or who faces challenges with controlling their{' '}
								<span className='cta-emphasis'>
									{' '}
									big emotions{' '}
								</span>?
							</div>
							<div className='benefits__p2'>
								if so, this book is for you!
							</div>
							<div className='benefits__p3'>
								<p>
									During my career, I have gained over{' '}
									<span className='cta-emphasis'>
										10 years
									</span>{' '}
									of valuable experience as a child and family
									therapist.
								</p>
								This experience gives me unique insight into
								writing fun stories for kids that help
								strengthen their{' '}
								<span className='cta-emphasis'>
									self-regulation
								</span>{' '}
								skills and learn healthy new ways of managing
								their emotions.
							</div>
						</div>
					</div>
					<div className='testimonials'>
						<Carousel
							title='Testimonials'
							icon='thumbsup'
							data={testimonialJSON.testimonials}
							dataType='text'
						/>
					</div>
				</section>
			</Section>
			<Divider angle />
			<Section color='teal' className='books-teal' angle='both'>
				<section className='books-section'>
					<Card
						href='https://www.amazon.com/Will-Okay-Just-Like-Hero/dp/1942005520/ref=sr_1_1?crid=2SQ0E2D0Z20WN&keywords=it+will+be+okay+vladimir+sainte&qid=1570911125&sprefix=it+will+be+okay+vladimi%2Caps%2C153&sr=8-1'
						imgSrc={iwbocover}
						imgAlt={'It Will Be Okay'}
						btnColor={'cta'}
						btnText={'Buy Now'}
						boxShadow={'default'}
					/>
					<Card
						href='https://www.amazon.com/Just-Like-Hero-Vladimir-Sainte/dp/194200544X/ref=sr_1_1?ie=UTF8&qid=1549147023&sr=8-1&keywords=just+like+a+hero'
						imgSrc={jlahcover}
						imgAlt={'Just Like A Hero'}
						btnColor={'default'}
						btnText={'Buy Now'}
						boxShadow={'default'}
					/>
				</section>
			</Section>
			<Divider angle />
			<Section color='lightGray' paper angle='top' padding='1.5vw 0 0 0'>
				<section className='speaking-section'>
					<div className='speaking-section__left'>
						<h2>Speaking</h2>
						<div className='speaking-section__content'>
							I regularly give interactive presentations for
							children of all ages. These events provide a chance
							to learn and practice positive coping skills, while
							also helping kids discover their own personal
							superhero.
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
				</section>
			</Section>
			<Divider />
			<Section color='var(--white)'>
				<section className='about-section'>
					<div className='about-section__left'>
						<div className='about-section__header'>
							<h3>About Vladimir</h3>
							<Thumbnail src={headshot} alt='Vladimir Sainte' />
						</div>

						<div className='about-section__content'>
							I've been working as a licensed clinical social
							worker in the greater Kansas City area for the last
							ten years. My mission is to create inclusive
							literature to increase resiliency and a sense of
							worth in children.
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
				</section>
			</Section>
		</Layout>
	);
};

export default Home;
