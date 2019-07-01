import React from 'react';
import RenderColumns from './RenderColumns';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

class Projects extends React.Component{

	renderOldPortfolios(){
		return(
			<div>
			</div>
		);
	}

	renderBadge(techs){
		return (
			techs.map(tech=>
				<Badge key={tech} variant='dark' className='projectsTechBadge'>{tech}</Badge>
			)
		)
	}

	renderProjects(){
		return(
			<div className='projectsBody'>
				<h1>Projects</h1>
					<Container>
						<Row>
							<Col sm className='colMargin'>
								
								<Link to='/projects/plant'><div className='projectIcon'>
								<img alt='logo' src={require('../assets/plant/logo.png')} />
								</div></Link>
								<div className='projectLogoItems'>
								<h5>Plant Feedr</h5>
								<p className='projectLogoDescription'>Keep your plants alive with this fullstack
								water reminder application
								</p>
								<div>
									{this.renderBadge(['React','Redux','Node','MongoDB'])}
								</div>
								</div>
							</Col>
							<Col sm className='colMargin'>
							
							<Link to='/projects/theblog'><div className='projectIcon'></div></Link>
							<div className='projectLogoItems'>
								<h5>The Blog</h5>
								<p className='projectLogoDescription'>
									Personal blog with React front-end powered by Contentful
									</p>
								<div> 
								{this.renderBadge(['React','Redux','CSS','Contentful'])}
								</div>
								</div>
							</Col>
							<Col sm className='colMargin'>
							
							<Link to='/projects/thefilmdb'><div className='projectIcon'>
							<img alt='logo' src={require('../assets/thefilmdb/logo.png')} />
							</div></Link>
							<div className='projectLogoItems'>
								<h5>The FilmDB</h5> 
								<p className='projectLogoDescription'>
								Learn about your favorite movies with this movie database web app 
								</p>
								<div>
									{this.renderBadge(['React','Redux','CSS','Semantic UI'])}
								</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col sm className='colMargin'>
							
							<Link to='/projects/restaurant-roulette'> <div className='projectIcon'>
							<img alt='logo' src={require('../assets/restaurant-roulette/logo.png')} />
							</div></Link>
							<div className='projectLogoItems'>
								 <h5>Restaurant Roulette</h5>
								 <p className='projectLogoDescription'>
								Find nearby restaurants with this random restaurant generator
								</p>
								<div>
									{this.renderBadge(['JavaScript','HTML','CSS'])}
								</div>
								</div>
							</Col>
							<Col sm className='colMargin'>
							
							<Link to='/projects/photo-portfolio'><div className='projectIcon'></div></Link>
							<div className='projectLogoItems'>
								 <h5>Photo Portfolio</h5>
								 <p className='projectLogoDescription'>
								Web page created to showcase personal photography
								</p>
								<div>
									{this.renderBadge(['HTML','CSS/Less','Bootstrap','jQuery'])}
								</div>
								</div>
							</Col>
							<Col sm className='colMargin'>
							
							<Link to='/projects/goldenhour'><div className='projectIcon'>
							<img alt='logo' src={require('../assets/golden-hour/logo.png')} />
							</div></Link>
							<div className='projectLogoItems'>
								<h5>Golden Hour</h5>
								<p className='projectLogoDescription'>
								Calculate golden hour with this photography tool
								</p>
								<div>
									{this.renderBadge(['JavaScript','HTML','CSS'])}
								</div>
								</div>
							</Col>
						</Row>
					</Container>
						

			
			</div>
		);
	}


	render(){
		return(
			<div>
				{this.renderProjects()}
			</div>
		)
	}
}

export default Projects;