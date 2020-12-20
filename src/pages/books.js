import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import useScrollToTop from '../hooks/useScrollToTop';

import BookDetails from '../components/Books/BookDetails';
import SEO from '../components/Layout/Seo';
import Section from '../components/shared/Section';

import './books.css';

const Books = () => {
	useScrollToTop();
	const booksData = useStaticQuery(imageQuery);

	return (
		<React.Fragment>
			<SEO title='Books' />
			<Section>
				<div className='books'>
					<h1 className='page-title'>Books by Vladimir Sainte</h1>
					<div className='books__content'>
						<BookDetails
							subImg1={
								booksData.mmzaidspeed.childImageSharp.fluid
							}
							subImg2={
								booksData.mmzaidrules.childImageSharp.fluid
							}
							subImg3={
								booksData.mminnerstrength.childImageSharp.fluid
							}
							mainImg={booksData.mmCover.childImageSharp.fluid}
							date='2020'
							title='Making Mistakes'
							desc='<em>Making Mistakes</em> is about a young boy
								named Zaid who has trouble slowing down.
								In this story, Zaid learns to control his impulses with the help of the Inner Strength Organizer.'
							href='https://www.amazon.com/Making-Mistakes-Just-Like-Hero/dp/1942005571/ref=sr_1_1?dchild=1&keywords=making+mistakes+vladimir+sainte&qid=1602393034&sr=8-1'
						/>
						<BookDetails
							subImg1={
								booksData.iwboblackphoto.childImageSharp.fluid
							}
							subImg2={
								booksData.iwboredphoto.childImageSharp.fluid
							}
							subImg3={
								booksData.iwbopurplephoto.childImageSharp.fluid
							}
							mainImg={booksData.iwboCover.childImageSharp.fluid}
							date='2019'
							title='It Will Be Okay'
							desc='<em>It Will Be Okay</em> is about a young girl
								named Alma who has many anxieties and fears.
								In this story, she will learn steps to mastering
								her emotions with the help of the mighty Hope Shield.'
							href='https://www.amazon.com/Will-Okay-Just-Like-Hero/dp/1942005520/ref=sr_1_1?crid=2SQ0E2D0Z20WN&keywords=it+will+be+okay+vladimir+sainte&qid=1570911125&sprefix=it+will+be+okay+vladimi%2Caps%2C153&sr=8-1'
						/>
						<BookDetails
							subImg1={
								booksData.jlahblackphoto.childImageSharp.fluid
							}
							subImg2={
								booksData.jlahpurplephoto.childImageSharp.fluid
							}
							subImg3={
								booksData.jlahyellowphoto.childImageSharp.fluid
							}
							mainImg={booksData.jlahCover.childImageSharp.fluid}
							date='2018'
							title='Just Like A Hero'
							desc='<em>Just Like A Hero</em> is a story
								about Will, a child discovering his	self-worth through daily life struggles and his
								journey to becoming the hero he is meant to be. This book teaches personal
								values, challenges negative thoughts, and
								provides activities to promote self-esteem and
								effective coping mechanisms.'
							href='https://www.amazon.com/Just-Like-Hero-Vladimir-Sainte/dp/194200544X/ref=sr_1_1?ie=UTF8&qid=1549147023&sr=8-1&keywords=just+like+a+hero'
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
						<div className='igvideo-wrapper'>
							<iframe
								src='https://www.instagram.com/p/CIjJ9j2gwDT/embed'
								frameBorder='0'
								allowFullScreen
								scrolling='no'
								allowtransparency='true'
							/>
						</div>
					</div>
				</div>
			</Section>
		</React.Fragment>
	);
};

const imageQuery = graphql`
	query BooksImgs {
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
		jlahblackphoto: file(
			relativePath: { eq: "just-like-a-hero-book-img1.jpg" }
		) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		jlahpurplephoto: file(
			relativePath: { eq: "just-like-a-hero-book-img2.jpg" }
		) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		jlahyellowphoto: file(
			relativePath: { eq: "just-like-a-hero-book-img3.jpg" }
		) {
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
	}
`;

export default Books;
