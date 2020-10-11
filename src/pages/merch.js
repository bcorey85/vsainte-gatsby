import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import useScrollToTop from '../hooks/useScrollToTop';

import SEO from '../components/Layout/Seo';
import Section from '../components/shared/Section';
import Image from '../components/shared/Image';

import './merch.css';

const Merch = () => {
	useScrollToTop();
	const merchData = useStaticQuery(imageQuery);

	return (
		<React.Fragment>
			<SEO title='Merch' />
			<Section>
				<h1 className='page-title'>Merch</h1>
				<div className='merch'>
					<h2>New Gear!</h2>
					<p>
						I've teamed up with the awesome people at Redbubble to
						design some amazing merch featuring my illustrations.
					</p>
					<p>
						<a href='https://www.redbubble.com/shop/ap/57049719?asc=I'>
							Click here to check out my shop
						</a>
					</p>
				</div>
				<div className='merch__images'>
					<Image
						fluid={merchData.vsainteMerch.childImageSharp.fluid}
						alt='Image of Zaid running fast from Making Mistakes book'
						boxShadow='default'
						className='features__img'
					/>
					<Image
						fluid={merchData.harmonyShirt.childImageSharp.fluid}
						alt='Image of Zaid running fast from Making Mistakes book'
						boxShadow='default'
						className='features__img'
					/>
					<Image
						fluid={merchData.diverseShirt.childImageSharp.fluid}
						alt='Image of Zaid running fast from Making Mistakes book'
						boxShadow='default'
						className='features__img'
					/>
					<Image
						fluid={merchData.diverseTank.childImageSharp.fluid}
						alt='Image of Zaid running fast from Making Mistakes book'
						boxShadow='default'
						className='features__img'
					/>
				</div>
			</Section>
		</React.Fragment>
	);
};

const imageQuery = graphql`
	query MerchImgs {
		diverseShirt: file(relativePath: { eq: "diverse-tshirt.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		diverseTank: file(relativePath: { eq: "diverse-tanktop.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		harmonyShirt: file(relativePath: { eq: "harmony-tshirt.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		vsainteMerch: file(relativePath: { eq: "vsainte-merch.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

export default Merch;
