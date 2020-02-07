import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';

import Section from '../components/shared/Section';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import SEO from '../components/Seo';

import './contact.css';

const Contact = ({ location }) => {
	useScrollToTop();
	return (
		<React.Fragment>
			<SEO title='Contact' />

			<Section>
				<div className='contact'>
					<h1 className='page-title'>Contact</h1>
					<div className='contact__content'>
						<div className='contact__left'>
							<div>
								<div className='contact__item'>
									<h2>Email</h2>
									<a
										href='mailto:vladimirsainte@gmail.com'
										className='link'>
										vladimirsainte@gmail.com
									</a>
								</div>
								<div className='contact__item'>
									<h2>Facebook</h2>
									<a
										href='https://www.facebook.com/justlikeahero'
										className='link'>
										Just Like a Hero
									</a>
								</div>
								<div className='contact__item'>
									<h2>Instagram</h2>
									<a
										href='https://www.instagram.com/Vla1899'
										className='link'>
										Vla1899
									</a>
								</div>
							</div>
						</div>
						<div className='contact__right'>
							<div className='contact__comments'>
								<h2>Comments</h2>
								<form
									method='POST'
									action='https://formspree.io/vladimirsainte@gmail.com'>
									<div>
										<div>
											<Input
												type='text'
												name='name'
												placeholder='Name'
												id='name'
											/>
										</div>
										<div>
											<Input
												type='email'
												name='replyto'
												placeholder='Email'
												id='email'
											/>
										</div>
									</div>
									<div>
										<Input
											type='textarea'
											name='comments'
											placeholder='Comments'
											id='comments'
										/>
									</div>
									<div className='contact__comments-submit'>
										<Button margin='none' type='submit'>
											Submit
										</Button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</React.Fragment>
	);
};

export default Contact;
