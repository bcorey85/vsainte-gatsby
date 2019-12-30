import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'gatsby';

import useScrollToTop from '../hooks/useScrollToTop';

import BookDetails from '../components/BookDetails';
import SEO from '../components/seo';
import Section from '../components/shared/Section';

import iwboblackphoto from '../images/iwboblackphoto.jpg';
import iwbopurplephoto from '../images/iwbopurplephoto.jpg';
import iwboredphoto from '../images/iwboredphoto.jpg';
import iwbocover from '../images/iwbocover.jpg';
import jlahblackphoto from '../images/jlahblackphoto.jpg';
import jlahyellowphoto from '../images/jlahyellowphoto.jpg';
import jlahpurplephoto from '../images/jlahpurplephoto.jpg';
import jlahcover from '../images/jlahcover.jpg';

import './Books.css';

const Books = ({ location }) => {
	useScrollToTop();
	return (
		<React.Fragment>
			<SEO title='Books' />

			<Section>
				<div className='books'>
					<h1 className='page-title'>Books by Vladimir Sainte</h1>
					<div className='books__content'>
						<BookDetails
							subImg1={iwboblackphoto}
							subImg2={iwboredphoto}
							subImg3={iwbopurplephoto}
							mainImg={iwbocover}
							date='2019'
							title='It Will Be Okay'
							desc='<em>It Will Be Okay</em> is about a young girl
								named Alma who is burdened by anxiety and fears.
								In the story, she will learn steps to mastering
								her anxieties and becoming her own hero.'
							href='https://www.amazon.com/Will-Okay-Just-Like-Hero/dp/1942005520/ref=sr_1_1?crid=2SQ0E2D0Z20WN&keywords=it+will+be+okay+vladimir+sainte&qid=1570911125&sprefix=it+will+be+okay+vladimi%2Caps%2C153&sr=8-1'
						/>
						<BookDetails
							subImg1={jlahblackphoto}
							subImg2={jlahpurplephoto}
							subImg3={jlahyellowphoto}
							mainImg={jlahcover}
							date='2018'
							title='Just Like A Hero'
							desc='<em>Just Like A Hero</em> teaches personal
								values, challenges negative thoughts, and
								provides activities to promote self-esteem and
								effective coping mechanisms. This is a story
								about Will, a child discovering his inner
								self-worth through daily life struggles and his
								journey to becoming the hero he is meant to be.'
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

export default Books;
