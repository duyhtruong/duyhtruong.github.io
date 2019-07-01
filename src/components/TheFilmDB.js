import React from 'react';
import RenderColumns from './RenderColumns';
import Badge from 'react-bootstrap/Badge';
import ProjectButton from './ProjectButton';

class TheFilmDB extends React.Component{

	renderBadge(){
		return(
				<div>
					
					<Badge variant="dark">React</Badge>
					{' '}
					<Badge variant="dark">Redux</Badge>
					{' '}
					<Badge variant="dark">CSS</Badge>
					{' '}
					<Badge variant="dark">SemanticUI</Badge>
				</div>
		);
	}


	renderBlog(){
		return(
			<div>
				
				<img alt='post' className='mockupImage' src={require('../assets/thefilmdb/mockup_film.png')} /> 
				<h1>The FilmDB</h1>	
				{this.renderBadge()}

				<ProjectButton live='http://bit.ly/2E3I4iR' repo='http://bit.ly/2JCB00p' />




				<div className='innerColumnRight'>
					<p>
					TheFilmDB is a movie database web application where users 
					can learn about movies they're interested in, and see what movies 
					are trending today. The web app features basic CRUD functionality 
					where users can: 
					</p>
						<ul>
							<li>Add movies to a 'favorites' page</li>
							<li>Read and learn about each item in the favorites list</li>
							<li>Update notes for each movie in the favorites list</li>
							<li>Delete movies from the list</li>

						</ul>

					<p>
					The web application is built using React.js with state management handled by 
					Redux. Information about trending movies and movie details are fetched from 
					themovieDB API using Axios. All forms used in this web app are handled using 
					Redux-Form. Website navigation is handled using React-Router. Semantic UI was used 
					for styling.
					</p>
				<img alt='post'  src={require('../assets/thefilmdb/trending_film.png')} /> 
				<img alt='post' src={require('../assets/thefilmdb/details_film.png')} /> 
				<img alt='post' src={require('../assets/thefilmdb/favorites_film.png')} /> 
					<p>
						<strong>To use: </strong>
					</p>
					<ul>
						<li>Head over to the live demo link</li>
						<li>The landing page shows list of current up-to-date trending movies</li>
						<li>To learn more about each movie, click on the movie poster</li>
						<li>To add a movie to your favorites, in the detail's page of the movie, click 'add to favorites'</li>
						<li>To view a lst of your favorite movies, click 'favorites'</li>
						<li>To search for a movie, click on the searchbar, input the title of the movie, and submit</li>

					</ul>

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

export default TheFilmDB;