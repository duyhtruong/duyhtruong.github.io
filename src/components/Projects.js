import React from 'react';

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
				<Badge key={tech} variant='light' className='projectsTechBadge'>{tech}</Badge>
			)
		)
	}

	renderProjects(){
		return(
			<div className='projectsBody'>
				<h1>Projects</h1>
					<Container>
						<Row>
							<Col md lg={4} className='colMargin'>
								
								<Link to='/projects/plant'>
								<div className='projectIcon'>
									<img className='projectLogoSize' alt='logo' src={require('../assets/plant/logo.png')} />
								</div>
								
								</Link>
							
								<div>
									{this.renderBadge(['React','Redux','Node','MongoDB'])}
								</div>
								
							</Col>
							<Col md lg={4} className='colMargin'>
							
							<Link to='/projects/theblog'>
							<div className='projectIcon'>
								<img className='projectLogoSize' alt='logo' src={require('../assets/theblog/logo.png')} />
							</div>
					
							</Link>
							
								<div> 
								{this.renderBadge(['React','Redux','CSS','Contentful'])}
								</div>
					
							</Col>
							<Col md lg={4} className='colMargin'>
							
							<Link to='/projects/thefilmdb'>
							<div className='projectIcon'>
							<img className='projectLogoSize' alt='logo' src={require('../assets/thefilmdb/logo.png')} />
							</div>
							
							</Link>
					

								<div>
									{this.renderBadge(['React','Redux','CSS','Semantic UI'])}
								</div>
						
							</Col>
					
							<Col md lg={4} className='colMargin'>
							
							<Link to='/projects/restaurant-roulette'> 
							<div className='projectIcon'>
							<img className='projectLogoSize' alt='logo' src={require('../assets/restaurant-roulette/logo.png')} />
							</div>
				
							</Link>
							
					
								<div>
									{this.renderBadge(['JavaScript','HTML','CSS'])}
								</div>
						
							</Col>
							<Col md lg={4} className='colMargin'>
							
							<Link to='/projects/photo-portfolio'>
							<div className='projectIcon'>
							<img className='projectLogoSize' alt='logo' src={require('../assets/photo-portfolio/logo.png')} />
							</div>
						
							</Link>
							
				
								<div>
									{this.renderBadge(['HTML','CSS/Less','Bootstrap','jQuery'])}
								</div>
								
							</Col>
							<Col md lg={4} className='colMargin'>
							
							<Link to='/projects/goldenhour'>
							<div className='projectIcon'>
							<img className='projectLogoSize' alt='logo' src={require('../assets/golden-hour/logo.png')} />
							</div>
						
							</Link>
							
				
								<div>
									{this.renderBadge(['JavaScript','HTML','CSS'])}
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