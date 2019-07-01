import React from 'react';
import RenderColumns from './RenderColumns'
import Badge from 'react-bootstrap/Badge';
import ProjectButton from './ProjectButton';


class Plant extends React.Component{

	renderBadge(){
		return(
				<div>
					
					<Badge variant="dark">React</Badge>
					{' '}
					<Badge variant="dark">Redux</Badge>
					{' '}
					<Badge variant="dark">NodeJS</Badge>
					{' '}
					<Badge variant="dark">MongoDB</Badge>
                    {' '}
					<Badge variant="dark">CSS</Badge>
                    {' '}
					<Badge variant="dark">Bootstrap</Badge>
				</div>
		);
	}


	renderPlant(){
		return(
			<div>
				
				<img alt='post' className='mockupImage' src={require('../assets/plant/mockup_plant.png')} /> 
				<h1>Plant Feedr</h1>	
				{this.renderBadge()}

				<ProjectButton live='https://www.bit.ly/2DNLKGX' repo='https://www.bit.ly/2PGkiRO' />

				<div className='innerColumnRight'>
					<p>
					PlantFeedr is a fullstack web application built to help keep plants alive. I've recently
                    been introduced to the world of house plants. It's an interesting
                    and fulfilling hobby that comes with one responsibility: keeping something alive. Through research
                    and some sacrifices, I've learned that the number one killer of plants is either over or under watering.
					</p>
                    <p>
                    I've created PlantFeedr as a way for users to keep track of their plants and their feeding 
                    schedules. Users add each plant instance with the number of days between watering, and the web app
                    lets the user know when to water the plant next. 
                    </p>
				<img alt='post' src={require('../assets/plant/landing_plant.png')} />
                <p>
                    Learning back-end technology and how it links to a React front-end was another
                    motivator for completing this project. I've been used to creating front-end projects using
                    readily available API endpoints online, but never understood where the data was coming from. 
                    This bothered me, so I built my own API back-end using NodeJS and MongoDB. 
                </p>

                <img alt='post' src={require('../assets/plant/home_plant.png')} />
                <p>
                    The application is fully authenticated using JSON Web Tokens. Users are able to create
                    and sign into their personal accounts. Login and Register fields are validated. User credentials
                    are hashed then saved in a MongoDB. 
                </p>
				<img alt='post' src={require('../assets/plant/auth1_plant.png')} />
                <img alt='post' src={require('../assets/plant/auth2_plant.png')} />
                <p>
                    Redux is used to manage application state. Redux-form is used throughout the application
                    to manage form state. The application features CRUD functionality. Users are able to 
                    create new plants, view plants, update plants, and delete plants.
                </p>
                <img alt='post' src={require('../assets/plant/form_plant.png')} />
                <p>
                    All user plants are displayed in a feed of individual cards. Each plant card contains information
                    of the plant, including when the plant needs to be watered next.  
                </p>

                <img alt='post' src={require('../assets/plant/cards_plant.png')} />
                <img alt='post' src={require('../assets/plant/card_plant.png')} />
                <img alt='post' src={require('../assets/plant/nav_plant.png')} />
                <p>
                    The application is styled using React-Bootstrap components combined with
                    custom CSS.
                </p>
                <img alt='post' src={require('../assets/plant/logout_plant.png')} />

				</div>
			</div>
		);
	}


	render(){
		return(
			<div>
			<RenderColumns right={this.renderPlant()} />
			</div>
		)
	}
}

export default Plant;