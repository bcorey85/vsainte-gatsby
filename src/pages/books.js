import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import useScrollToTop from '../hooks/useScrollToTop';

import BookDetails from '../components/Books/BookDetails';
import Seo from '../components/Layout/Seo';
import Section from '../components/shared/Section';

import './books.css';

const Books = () => {
	useScrollToTop();
	const booksData = useStaticQuery(imageQuery);

	return (
		<React.Fragment>
			<Seo title='Books' />
			<Section>
				<div className='books'>
					<h1 className='page-title'>Books by Vladimir Sainte</h1>
					<div className='books__content'>
						<BookDetails
							subImg1={
								booksData.woh3.childImageSharp.gatsbyImageData
							}
							subImg2={
								booksData.woh2.childImageSharp.gatsbyImageData
							}
							subImg3={
								booksData.woh1.childImageSharp.gatsbyImageData
							}
							mainImg={booksData.wohCover.childImageSharp.gatsbyImageData}
							date='2023'
							title='The Waves of Hurt'
							desc='<em>The Waves of Hurt</em> examines the complexities of grief. It emphasizes looking beyond problematic actions to understand the underlying pain.'
							href='https://www.amazon.com/Waves-Hurt-Vladimir-Sainte/dp/B0BY3RJJK1/?_encoding=UTF8&pd_rd_w=Kc5KC&content-id=amzn1.sym.a7785aa2-ac28-4769-b3eb-cff7b9738627&pf_rd_p=a7785aa2-ac28-4769-b3eb-cff7b9738627&pf_rd_r=139-4296644-6411434&pd_rd_wg=bXwvx&pd_rd_r=d9d97eb5-fcb4-461b-a73a-2a8caa1f0994&ref_=aufs_ap_sc_dsk'
						/>
						<BookDetails
							subImg1={
								booksData.mmzaidspeed.childImageSharp.gatsbyImageData
							}
							subImg2={
								booksData.mmzaidrules.childImageSharp.gatsbyImageData
							}
							subImg3={
								booksData.mminnerstrength.childImageSharp.gatsbyImageData
							}
							mainImg={booksData.mmCover.childImageSharp.gatsbyImageData}
							date='2020'
							title='Making Mistakes'
							desc='<em>Making Mistakes</em> is about a young boy
								named Zaid who has trouble slowing down.
								In this story, Zaid learns to control his impulses with the help of the Inner Strength Organizer.'
							href='https://www.amazon.com/Making-Mistakes-Just-Like-Hero/dp/1942005571/ref=sr_1_1?dchild=1&keywords=making+mistakes+vladimir+sainte&qid=1602393034&sr=8-1'
						/>
						<BookDetails
							subImg1={
								booksData.iwboblackphoto.childImageSharp.gatsbyImageData
							}
							subImg2={
								booksData.iwboredphoto.childImageSharp.gatsbyImageData
							}
							subImg3={
								booksData.iwbopurplephoto.childImageSharp.gatsbyImageData
							}
							mainImg={booksData.iwboCover.childImageSharp.gatsbyImageData}
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
								booksData.jlahblackphoto.childImageSharp.gatsbyImageData
							}
							subImg2={
								booksData.jlahpurplephoto.childImageSharp.gatsbyImageData
							}
							subImg3={
								booksData.jlahyellowphoto.childImageSharp.gatsbyImageData
							}
							mainImg={booksData.jlahCover.childImageSharp.gatsbyImageData}
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
					</div>
				</div>
			</Section>
		</React.Fragment>
	);
};

const imageQuery = graphql`
	query BooksImgs {
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
		woh1: file(
			relativePath: { eq: "2025/woh1.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		woh2: file(
			relativePath: { eq: "2025/woh2.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		woh3: file(
			relativePath: { eq: "2025/woh3.jpg" }
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
		iwboblackphoto: file(
			relativePath: { eq: "it-will-be-okay-book-img1.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		iwboredphoto: file(
			relativePath: { eq: "it-will-be-okay-book-img2.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		iwbopurplephoto: file(
			relativePath: { eq: "it-will-be-okay-book-img3.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		iwbobluephoto: file(
			relativePath: { eq: "it-will-be-okay-book-img4.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		jlahblackphoto: file(
			relativePath: { eq: "just-like-a-hero-book-img1.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		jlahpurplephoto: file(
			relativePath: { eq: "just-like-a-hero-book-img2.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		jlahyellowphoto: file(
			relativePath: { eq: "just-like-a-hero-book-img3.jpg" }
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
		mminnerstrength: file(
			relativePath: { eq: "mm-inner-strength-organizer.jpg" }
		) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		mmzaidrules: file(relativePath: { eq: "mm-zaid-rules.jpg" }) {
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
					quality: 90
				)
			}
		}
		mmzaidspeed: file(relativePath: { eq: "mm-zaid-speed.jpg" }) {
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

export default Books;
