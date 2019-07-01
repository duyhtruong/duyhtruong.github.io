import React from 'react';
import RenderColumns from './RenderColumns'
import Badge from 'react-bootstrap/Badge';
import ProjectButton from './ProjectButton';


class PhotoPortfolio extends React.Component{

	renderBadge(){
		return(
				<div>
					
					<Badge variant="dark">HTML</Badge>
					{' '}
					<Badge variant="dark">CSS/Less</Badge>
					{' '}
					<Badge variant="dark">Bootstrap</Badge>
					{' '}
					<Badge variant="dark">jQuery</Badge>
				</div>
		);
	}


	renderBlog(){
		return(
			<div>
				
				<img alt='post' className='mockupImage' src={require('../assets/photo-portfolio/mockup_photo.png')} /> 
				<h1>Photo Portfolio</h1>	
				{this.renderBadge()}

				<ProjectButton live='https://www.bit.ly/2DNLKGX' repo='https://www.bit.ly/2PGkiRO' />

				<div className='innerColumnRight'>
					<p>
					Photo portfolio is a web app created to showcase my personal photography. When entering the webpage, users are greeted with a large full-screen 
					carousel of images. Just below the carousel is an instagram-like grid display of more photos
					with a functioning filter tab. The website is structured using HTML, styled using CSS/Bootstrap, and filter function incorporated using jQuery.
		
					</p>
				<img alt='post' src={require('../assets/photo-portfolio/body3_photo.png')} />
				<img alt='post' src={require('../assets/photo-portfolio/body_photo.png')} /> 
				<img alt='post' src={require('../assets/photo-portfolio/contact_photo.png')} /> 
				<img alt='post' src={require('../assets/photo-portfolio/body2_photo.png')} />
				</div>
			</div>
		);
	}


	render(){
		return(
			<div>
			<RenderColumns right={this.renderBlog()} />
			</div>
		)
	}
}

export default PhotoPortfolio;