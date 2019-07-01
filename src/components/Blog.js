import React from 'react';
import RenderColumns from './RenderColumns';

import Badge from 'react-bootstrap/Badge';
import ProjectButton from './ProjectButton';

class Blog extends React.Component{
	
	renderBadge(){
		return(
				<div>
					
					<Badge variant="dark">React</Badge>
					{' '}
					<Badge variant="dark">Redux</Badge>
					{' '}
					<Badge variant="dark">CSS</Badge>
					{' '}
					<Badge variant="dark">Contentful</Badge>
				</div>
		);
	}


	renderBlog(){
		return(
			<div>
				
				<img alt='post' className='mockupImage' src={require('../assets/theblog/mockup_blog.png')} /> 
				<h1>The Blog</h1>	
				{this.renderBadge()}

				<ProjectButton live='http://bit.ly/2VuBEnJ' repo='http://bit.ly/2HgwpOl' />



				<div className='innerColumnRight'>
					<p>
						The Blog was created with the purpose of being a personal space where I can
						post about my travels, product reviews, and more. In the past, I've used blogging
						platforms such as Tumblr which was easy to use, but I always felt constricted 
						design-wise as I was forced to use the platform's front-end templates.
					</p>

					<p>
						With this need in mind, I researched methods of combining blog posts hosted on an 
						external server with a front-end designed by me. I learned about Headless Content Management
						Systems, a back-end only content management system (CMS) that makes content accessible through RESTful API endpoints.
					</p>
					<p>
						The Blog fetches posts from the headless CMS Contentful and displays it using React. 
						The single page app is fully routed using React Router with state managed using Redux.
					</p>

					<img alt='post' src={require('../assets/theblog/post2_blog.png')} />
					<img alt='post' src={require('../assets/theblog/post_blog.png')} />
					<img alt='archive' src={require('../assets/theblog/archive_blog.png')} />
					<p> All posts from Contentful are displayed in the Archive page, sorted by Tag.</p>
					<img alt='contentful' src={require('../assets/theblog/contentful_blog.png')} />
					<img alt='contentful' src={require('../assets/theblog/contentful2_blog.png')} />
					<p> Content is created using Contentful's web based content management system.
					Contentful allows you to create content models with customizable schema. Posts are accessible
					 through RESTful API endpoints.</p>
					<img alt='post' src={require('../assets/theblog/post3_blog.png')} />
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

export default Blog;