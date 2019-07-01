import React from 'react';
import Home from './Home';
import Projects from './Projects';

import Blog from './Blog';
import TheFilmDB from './TheFilmDB';
import RestaurantRoulette from './RestaurantRoulette';
import GoldenHour from './GoldenHour';
import PhotoPortfolio from './PhotoPortfolio';
import Plant from './Plant';

import { BrowserRouter, Route } from 'react-router-dom';



class App extends React.Component{
	


	render(){
		return(
			<BrowserRouter>
				<div className='mainBody'>
					<Route exact path='/' component={Home} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/projects/theblog' component={Blog} />
					<Route exact path='/projects/thefilmdb' component={TheFilmDB} />
					<Route exact path='/projects/restaurant-roulette' component={RestaurantRoulette} />
					<Route exact path='/projects/goldenhour' component={GoldenHour} />
					<Route exact path='/projects/photo-portfolio' component={PhotoPortfolio} />
					<Route exact path='/projects/plant' component={Plant} />
				</div>
			</BrowserRouter>
		);

	}
}

export default App;