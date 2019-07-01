import React from 'react';
import RenderColumns from './RenderColumns';
import Badge from 'react-bootstrap/Badge';
import ProjectButton from './ProjectButton';

class RestaurantRoulette extends React.Component{

	renderBadge(){
		return(
				<div>
					
					<Badge variant="dark">JavaScript</Badge>
					{' '}
					<Badge variant="dark">HTML</Badge>
					{' '}
					<Badge variant="dark">CSS</Badge>
					
				</div>
		);
	}


	renderBlog(){
		return(
			<div>
				
				<img alt='post' className='mockupImage' src={require('../assets/restaurant-roulette/mockup_restaurant.png')} /> 
				<h1>Restaurant Roulette</h1>	
				{this.renderBadge()}

				<ProjectButton live='https://www.bit.ly/2zkS2Kg' repo='https://www.bit.ly/2A4kDDj' />





				<div className='innerColumnRight'>
				
				<img alt='post'  src={require('../assets/restaurant-roulette/phone_restaurant.png')} /> 
				<p>
				Everyone has had this conversation. After being asked 'Where do you want to eat?', my brain momentarily
				shuts down, not knowing how to respond, followed by endless scrolling on Yelp.
				</p>
				<p>
				 Today, people have the luxury of choice. 
				Whether it be the type of car they choose to drive, or what brand canned-corn they want
				 to buy for Thanksgiving dinner, the options are endless. The result is a 'first-world-problem' of being 
				 paralyzed by choice, or not being able to easily make a decision. 
				 With around 5,000 restaurants listed on Yelp in San Francisco, choosing a place to 
				 eat is no easy feat.   
				</p>
				<p>
				Restaurant Roulette was created in the hopes of removing one less question out of a user's day.
				The web app takes in user criteria, such as price point and distance from user, and returns a randomized
				list of nearby restaurants. 
				</p>
				<img alt='post'  src={require('../assets/restaurant-roulette/choice_restaurant.png')} /> 
				<img alt='post' src={require('../assets/restaurant-roulette/map_restaurant.png')} /> 
				<p>
					The web app fetches restaurant data from Google Places API and displays 
					the location of the resulting restaurants using Google Maps.
				</p>

				<img alt='post' src={require('../assets/restaurant-roulette/results_restaurant.png')} /> 
				<p>
					<strong>To Use: </strong>
					<ul>
						<li>Allow Location Services on your device</li>
						<li>Toggle between different search parameters</li>
						<li>Click Go to get a list of randomized restaurants</li>
					</ul>
				</p>					
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

export default RestaurantRoulette;